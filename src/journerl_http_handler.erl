%%%-------------------------------------------------------------------
%% @doc journerl module that handles shell requests
%% @end
%%%-------------------------------------------------------------------
-module(journerl_http_handler).
-behavior(cowboy_http_handler).

-export([init/3,handle/2,terminate/3]).

init(_Type, Req, _Opts) ->
    {ok, Req, no_state}.

handle(Req, State) ->
    {Method, Req1} = cowboy_req:method(Req),
    handle_req(Method, Req, State).

terminate(_Reason, _Req, _State) ->
    ok.

handle_req(<<"POST">>, Req, State) ->
    {ok, <<"cmd=", Cmd/binary>>, _} = cowboy_req:body(Req),
    DCmd = cow_qs:urldecode(Cmd),
    lager:info("received command: ~p", [Cmd]),
    {ok, EvalResult} = journerl_shell:evaluate(binary_to_list(DCmd)),
    RBody = list_to_binary(io_lib:format("~p", [EvalResult])),
    {ok, ResReq} = cowboy_req:reply(200, [], RBody,  Req),
    {ok, ResReq, State}.
