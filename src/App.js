import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
	  const disabled = true;
    return (
	    <React.Fragment>
		    <header className={'top-header'}>&nbsp;</header>
		    <header className={'main-banner'}>&nbsp;</header>
		    <nav className={'main-navigation'}><span className={disabled ? 'link-disabled' : ''}>Art Work</span><span>Demo Reel</span><span>Resume</span></nav>
	    </React.Fragment>
    );
  }
}

export default App;
