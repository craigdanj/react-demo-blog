import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import PostList from './PostList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React demo blog</h1>
                </header>

                <PostList/>
            </div>
        );
    }
}

export default App;
