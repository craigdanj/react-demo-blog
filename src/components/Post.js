import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: "",
                body: ""
            }
        }
    }

    componentWillMount() {

        console.log(this)

        //fetch the current list of todos from the server
        // if(state.match && state.match.params && state.match.params.postId) {
            axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                // handle success

                // this.setState({
                //     posts: postList
                // })
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
        // }
    }

    render() {
        return (
            <form className="post text-left">
                <p>
                    <input type="text" placeholder="Title" value={this.state.post.title}/>
                </p>

                <p>
                    <textarea rows="7" type="text" placeholder="Body" value={this.state.post.body}></textarea>
                </p>

                <button>Create</button>
            </form>
        );
    }
}

export default Post;