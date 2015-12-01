%%%-------------------------------------------------------------------
%% @doc journerl top level supervisor.
%% @end
%%%-------------------------------------------------------------------

-module('journerl_sup').

-behaviour(supervisor).

%% API
-export([start_link/0]).

%% Supervisor callbacks
-export([init/1]).

-define(SERVER, ?MODULE).

%%====================================================================
%% API functions
%%====================================================================

start_link() ->
    supervisor:start_link({local, ?SERVER}, ?MODULE, []).

%%====================================================================
%% Supervisor callbacks
%%====================================================================

%% Child :: {Id,StartFunc,Restart,Shutdown,Type,Modules}
init([]) ->
    Shell =
    {journerl_shell,
     {journerl_shell, start_link, []},
	 permanent,
	 5000,
	 worker,
	 [journerl_shell]},
    {ok, { {one_for_all, 0, 1}, [Shell]} }.

%%====================================================================
%% Internal functions
%%====================================================================
