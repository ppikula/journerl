-module(journerl_shell).

-behaviour(gen_server).

%% API functions
-export([start_link/0,
         stop/0,
         evaluate/1]).

%% gen_server callbacks
-export([init/1,
         handle_call/3,
         handle_cast/2,
         handle_info/2,
         terminate/2,
         code_change/3]).

-record(state, {context}).

-define(DOT, $.).
%%%===================================================================
%%% API functions
%%%===================================================================

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

evaluate(String) ->
    Input = maybe_add_dot(String),
    lager:info("Evaluating: ~p", [Input]),
    gen_server:call(?MODULE, {eval, Input}).

stop() ->
    lager:info("Stopping shell"),
    gen_server:call(?MODULE, stop).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([]) ->
    {ok, #state{context = erl_eval:new_bindings()}}.

handle_call(stop, _From, State) ->
    {stop, normal, State};
handle_call({eval, String}, _From, State) ->
    {ok, Tokens, _} = erl_scan:string(String),
    parse_and_eval(Tokens, State);
handle_call(_Request, _From, State) ->
    Reply = ok,
    {reply, Reply, State}.

handle_cast(_Msg, State) ->
    {noreply, State}.

handle_info(_Info, State) ->
    {noreply, State}.

terminate(_Reason, _State) ->
    ok.

code_change(_OldVsn, State, _Extra) ->
    {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
parse_and_eval(Tokens, State) ->
    case erl_parse:parse_exprs(Tokens) of
        {ok, Expr} ->
            eval(Expr, State);
        _ ->
            {reply, {ok, "Syntax error in the input line"}, State}
    end.

eval(Expr, State) ->
    case safe_eval(Expr, State#state.context) of
        {ok, Res, Ctx} ->
            {reply, {ok, Res}, State#state{context = Ctx}};
        {error, Res} ->
            {reply, {ok, Res}, State}
    end.

safe_eval(Expr, Context) ->
    try
        {value, Res, NewContext}  = erl_eval:exprs(Expr, Context),
        {ok, Res, NewContext}
    catch
        Type:Exception -> {error, {Type, Exception}}
    end.

maybe_add_dot(Input) ->
    case lists:last(Input) of
        ?DOT -> Input;
        _ -> Input ++ "."
    end.
