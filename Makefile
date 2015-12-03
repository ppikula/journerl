compile_dev:
	./rebar3 as dev compile

run: compile_dev bower node_modules webpack
	erl -pa _build/*/lib/*/ebin -eval 'application:ensure_all_started(journerl), sync:start()'

bower:
	cd priv; bower install

webpack:
	cd priv; webpack

node_modules:
	cd priv; npm install

.PHONY: compile run
