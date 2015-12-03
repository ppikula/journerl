import React from 'react';

export default class ShellPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shellResults: []};
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
                commandNode.value = "";
                break;
        }
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
