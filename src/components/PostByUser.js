import React from 'react';
import PostItem from './PostItem';

class PostByUser extends React.Component{
    getUserPosts=()=>{
        return this.props.postsOfSelectedUser.map(post=>{
            return (
                <div key={post.id}>
                    <PostItem post={post} handleSelectUser={this.props.handleSelectUser}/>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div>
                All the posts by the user you Selected
                {this.getUserPosts()}
            </div>
        )
    }
    
}

export default PostByUser;