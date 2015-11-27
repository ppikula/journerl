# Journerl

**NOTICE:** right now project is in its early stage AKA: nothing works

It is an Erlang shell available via web browser.

## Why

First of all I wanted to have a frictionless way to record my debugging/troubleshooting
sessions on productions system. I found it quite useful, where it comes to writing
summary of your investigation or teaching other developers how to do such things.

## Why not iPython/jupyter kernel?

I've tried to play with these tool, but in my opinion it requires a lot of hassle
to get it working, especially installing jupyter deps, which might be not so easy
on production environments. My goal here is to reduce this hassle to one simple step:
**add journerl dependecy to the rebar.config file.**

## Features

* [in-progress] add plain text comments between shell calls
* [in-progress] fold/unfold big results and returned data structures
* [in-progress] inspect values such as pids or ports
* [in-progress] ability to display some results in visual form(ex. present
*erlang:memory* result on a chart)
* [in-progress] export report to the pdf format

## How to use

The only thing you need to do is add the joernerl repository to list of your dependencies
and just start the journerl application. By default the web UI listens on the loopback
interface on port 8080. This can be changed using proper application config. For
example to change it  to 10.0.0.1:9090 set the following values in your `sys.config`:

```
[
...
{journerl,[
           {listen_ip, {10,0,0,1}},
           {listen_port, 9090}
          ]},
...
```

## Under the hood

TODO

## For Developers

For those who want to develop journerl, it can be run in stand-alone mode. Development
environment requires node.js. When you have node.js installed in your system, you need
to install 2 node's dependencies webpack and bower globally. They are used for transpiling
and packing assets.

`$ npm install --global bower webpack`

Having all required dependencies you can run:

`$ make run`

This command is going to download all required JS libraries, transpile them, convert
assets and place the results in the `priv/build` directory. Right after preparing JS
the command will start Erlang node with journerl running and listening on previously
set port(by default 127.0.0.1:8080).

