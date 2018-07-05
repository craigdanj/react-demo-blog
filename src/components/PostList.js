import React from 'react';

function PostList(props) {
    let postList = props.posts.map((post, i) => {
        return <li>{post.title}</li>
    });

    return (
        

        <div>
            <ul className="text-left">
                {postList}
            </ul>
        </div>
    )
}


export default PostList;
