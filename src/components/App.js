import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import axios from 'axios'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import PostList from './PostList'
import Post from './Post'

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

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            // handle success
            // console.log(response.data);
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
            <BrowserRouter>
                <div className="App">

                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">React demo blog</h1>
                        <div className="text-left container">
                            <Link to="/">Home</Link> /&nbsp;
                            <Link to="/post/new">Create post</Link>
                        </div>
                    </header>

                    <content>
                        <Route path="/" exact render={() => {
                            return <PostList posts={this.state.posts}/>
                        }}/>

                        <Route path="/post/:postId" exact component={Post}/>
                    </content>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;