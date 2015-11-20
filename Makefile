compile:
	./rebar3 compile

run: compile bower webpack
	./rebar3 shell

bower:
	cd priv; bower install

webpack:
	cd priv; webpack

.PHONY: compile run
