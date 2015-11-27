compile:
	./rebar3 compile

run: compile bower node_modules webpack
	erl -pa _build/*/lib/*/ebin -eval 'application:ensure_all_started(journerl)'

bower:
	cd priv; bower install

webpack:
	cd priv; webpack

node_modules:
	cd priv; npm install

.PHONY: compile run
