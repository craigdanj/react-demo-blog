import React from 'react';
import {Link} from 'react-router-dom'

function PostList(props) {
    let postList = props.posts.map((post, i) => {
        return (<li key={i}>
            <Link to={"/post/" + post.id}>{post.title}</Link>
            </li>)
    });

    return (
        <div className="container">
            <ul className="post-list text-left">
                {postList}
            </ul>
        </div>
    )
}


export default PostList;