-module(journerl_shell_tests).

-include_lib("eunit/include/eunit.hrl").

-define(setup(F), {setup, fun start/0, fun stop/1, F}).
-define(eval(I), journerl_shell:evaluate(I)).

simple_calls_test_() ->
    [
     {"evaluate single atom",
       ?setup(fun single_atom/1)},
     {"bind variable",
       ?setup(fun bind_variable/1)},
     {"call functions",
       ?setup(fun call_function/1)}
    ].

single_atom(_) ->
    ?_assertEqual({ok, ok}, ?eval("ok.")).

bind_variable(_) ->
    [
     ?_assertEqual({ok, 1}, ?eval("P = 1.")),
     ?_assertEqual({ok, 1}, ?eval("P.")),
     ?_assertEqual({ok, 1}, ?eval("P=1.")),
     ?_assertEqual({ok, 2}, ?eval("K=2.")),
     ?_assertEqual({ok, 3}, ?eval("P+K."))
    ].

call_function(Pid) ->
    [
     ?_assertEqual({ok, Pid}, ?eval("self().")),
     ?_assertEqual({ok, <<"5">>}, ?eval("erlang:integer_to_binary(5).")),
     ?_assertMatch({ok, _}, ?eval("F = fun() -> ok end.")),
     ?_assertMatch({ok, ok}, ?eval("F()."))
    ].

%%%%%%%%%%%%%%%%%%%%%%%
%%% SETUP FUNCTIONS %%%
%%%%%%%%%%%%%%%%%%%%%%%
start() ->
    {ok, Pid} = journerl_shell:start_link(),
    Pid.

stop(_) ->
    catch journerl_shell:stop(),
    ok.
