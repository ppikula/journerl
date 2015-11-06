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
    {ok, ResReq} = cowboy_req:reply(200, Req),
    {ok, ResReq, State}.
