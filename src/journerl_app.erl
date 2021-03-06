%%%-------------------------------------------------------------------
%% @doc journerl public API
%% @end
%%%-------------------------------------------------------------------

-module('journerl_app').

-behaviour(application).

%% Application callbacks
-export([start/2
        ,stop/1]).

%%====================================================================
%% API
%%====================================================================

start(_StartType, _StartArgs) ->
    start_http(),
    'journerl_sup':start_link().

%%--------------------------------------------------------------------
stop(_State) ->
    stop_http(),
    ok.

%%====================================================================
%% Internal functions
%%====================================================================

start_http() ->
    Port = application:get_env(journerl, listen_port, 8080),
    Interface = application:get_env(journerl, listen_ip, {127,0,0,1}),
    Dispatch = cowboy_router:compile(cowboy_routes()),
    cowboy:start_http(journerl_http_listener, 100, [{port, Port}, {ip, Interface}],
                      [{env, [{dispatch, Dispatch}]}]).

cowboy_routes() ->
    [{'_', [
            {"/api/execute", journerl_http_handler, []},
            {"/build/[...]", cowboy_static, {priv_dir, journerl, "build"}},
            {"/", cowboy_static, {priv_file, journerl, "build/index.html"}}
           ]}].

stop_http() ->
    cowboy:stop_listener(journerl_http_listener).
