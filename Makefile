compile:
	./rebar3 compile

run: compile
	./rebar3 shell

.PHONY: compile
