import React from 'react';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import d3 from 'd3';
import c3 from 'c3/c3';
import ShellPanel from './shell_panel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Journerl</a>
          </div>
        </nav>
        <ShellPanel ref='shellPanel'/>
      </div>
    );
  }
}

React.render(
  <App/>,
  document.getElementById('main-container')
);
