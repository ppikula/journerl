-module(journerl_shell).

-behaviour(gen_server).

%% API functions
-export([start_link/0]).

%% gen_server callbacks
-export([init/1,
         handle_call/3,
         handle_cast/2,
         handle_info/2,
         terminate/2,
         code_change/3]).

%% api
-export([evaluate/1]).

-record(state, {context}).

%%%===================================================================
%%% API functions
%%%===================================================================

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

evaluate(String) ->
    gen_server:call(?MODULE, {eval, String}).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([]) ->
    {ok, #state{context = erl_eval:new_bindings()}}.

handle_call({eval, String}, _From, State) ->
    {ok, Ts, _} = erl_scan:string(String),
    {ok, Expr} = erl_parse:parse_exprs(Ts),
    {value, Res, NewContext}  = erl_eval:exprs(Expr, State#state.context),
    {reply, {ok, Res}, State#state{context = NewContext}};
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
