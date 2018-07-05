import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: "",
                body: "",
                new: true
            }
        }
    }

    componentWillMount() {
        this.setState({
                    post: {
                        title: "",
                        body: "",
                        new: true
                    }
                })
        console.log(this)

        //fetch the current list of todos from the server
        if(this.props.match && this.props.match.params && this.props.match.params.postId !== "new") {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.postId )
            .then(response => {
                // handle success

                this.setState({
                    post: {
                        title: response.data.title,
                        body: response.data.body,
                        new: false
                    }
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
        }
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

                {
                    this.state.post.new ?
                        <button type="button">Create</button>
                    :
                        <button type="button">Save</button>


                }
            </form>
        );
    }
}

export default Post;