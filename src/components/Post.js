import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: null,
                body: null
            }
        }
    }

    componentWillMount() {
        var postList = [];

        //fetch the current list of todos from the server

        axios.get("https://jsonplaceholder.typicode.com/posts",)
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
            <form className="post text-left">
                <p>
                    <input type="text" placeholder="Title" value={this.state.post.title}/>
                </p>

                <p>
                    <textarea rows="7" type="text" placeholder="Body">{this.state.post.body}</textarea>
                </p>

                <button>Create</button>
            </form>
        );
    }
}

export default Post;