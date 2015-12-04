import React from 'react';

export default class ShellPanel extends React.Component {
    constructor(props) {
        super(props);
        var historyLast = 0;
        if (localStorage.historySize) {
            historyLast = localStorage.historySize;
        }else{
            localStorage.setItem('historySize', 0);
        }
        this.state = {shellResults: [], historyPosition: Number(historyLast)+1};
    }

    addResult(result) {
        this.state.shellResults.push(result);
        this.setState(this.state);
    }

    handleKeyDown(e) {
        switch(e.keyCode) {
            case 13: /* RETURN */
                e.preventDefault();
                var commandNode = React.findDOMNode(this.refs.command);
                this.addResult("# " + commandNode.value);
                this.callExecute(commandNode.value);
                this.resetPrompt(commandNode);
                break;
            case 38: /* UP_ARROW */
                e.preventDefault();
                var commandNode = React.findDOMNode(this.refs.command);
                var currPos =  this.state.historyPosition;
                this.state.historyPosition = Math.max(1, currPos - 1);
                var key = "hist_" + this.state.historyPosition;
                commandNode.value = localStorage.getItem(key);
                this.setState(this.state);
                break;
            case 40: /* DOWN ARROW */
                e.preventDefault();
                var commandNode = React.findDOMNode(this.refs.command);
                var maxHist = Number(localStorage.historySize);
                var currPos = this.state.historyPosition;
                this.state.historyPosition = Math.min(Number(maxHist)+1, currPos + 1);
                var key = "hist_" + this.state.historyPosition;
                commandNode.value = localStorage.getItem(key);
                this.setState(this.state);
                break;
        }
    }

    resetPrompt(commandNode) {
        var newPos = Number(localStorage.historySize) + 1;
        localStorage.setItem('historySize', newPos);
        this.state.historyPosition = newPos + 1;
        localStorage.setItem('hist_'+newPos, commandNode.value);
        commandNode.value = "";
        this.setState(this.state);
    }

    callExecute(cmdline) {
        var n = cmdline.replace(/<\d+\.\d+\.\d+>/g, function r(x)
                {return "list_to_pid(\""+x+"\")"});
        $.post("/api/execute", {cmd: n}, this.handleResult.bind(this))
    };

    handleResult(data) {
        this.addResult(data);
    }

    render() {
        var results = this.state.shellResults;
        var shellPanels = [];
        for (var i = 0; i < results.length; i++) {
            shellPanels.push(
                    <div className="row">
                       <div className="col-md-12">
                             {results[i]}
                       </div>
                    </div>
                    )
        }
        return (<div className="container-fluid">
                   {shellPanels}
                   <input id="command" ref='command' type="text"
                          onKeyDown={this.handleKeyDown.bind(this)}/>
                </div>);
    }
};
