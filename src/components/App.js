import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import PostList from './PostList'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

    }

    componentWillMount() {
        var postList = [];

        //fetch the current list of todos from the server
        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            // handle success
            console.log(response.data);
            postList = response.data.slice(0,10)

            for (var i = postList.length - 1; i >= 0; i--) {
                postList[i].checked = false;
                postList[i].text = postList[i].title;
            }

            this.setState({
                posts: postList
            })

            
        })
        .catch(error => {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React demo blog</h1>
                </header>

                <PostList posts={this.state.posts}/>
            </div>
        );
    }
}

export default App;
