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
       ?setup(fun call_function/1)},
     {"add dot at the end if not present",
       ?setup(fun add_dot/1)}
    ].

error_calls_test_() ->
    [
     {"undefined function call",
       ?setup(fun undef_function/1)},
     {"parsing error",
       ?setup(fun syntax_error/1)}
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
     ?_assertEqual({ok, ok}, ?eval("F()."))
    ].

add_dot(_) ->
    [
     ?_assertEqual({ok, <<"5">>}, ?eval("erlang:integer_to_binary(5)"))
    ].

undef_function(_) ->
    [
     ?_assertMatch({ok, {error, undef, _}},
                   ?eval("nondefinedmod:nonexisting_function()."))
    ].

syntax_error(_) ->
    [
     ?_assertEqual({ok, "Syntax error in the input line"},
                   ?eval("jd092.c212c12/."))
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
