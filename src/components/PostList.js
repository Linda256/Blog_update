import React from 'react';

import PostItem from './PostItem';

class PostList extends React.Component{
    render(){
        const postsList=this.props.posts.map(post=>{
            return (
                <div key={post.id}>
                    <PostItem 
                        post={post} 
                        handleSelectUser={this.props.handleSelectUser}
                        editPost={this.props.editPost}
                    />
                </div>
            )
        })
                
        return(  
            <div>{postsList}</div>
        )
    }
} 

export default PostList;