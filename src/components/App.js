import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import PostList from './PostList';
import PostByUser from './PostByUser';
import postsApi from '../apis/postsApi';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[],
            postsOfSelectedUser:[]
        }
    }

    fetchPosts= async () => {
        const response=await postsApi.get(
            '/posts')
        const posts=response.data;
        this.setState({posts:posts});
    }

    componentDidMount(){
        this.fetchPosts();
    }

    editPost=(id,text)=>{
        let posts=this.state.posts;
        for(let i=0;i<posts.length;i++){
            if(posts[i].id===id){
                posts[i].body=text;
            }
        }
        this.setState({posts:posts});
    }

    handleSelectUser=(id)=>{
        const selectedPosts=this.state.posts.filter(post=>post.userId===id);
        this.setState({postsOfSelectedUser:selectedPosts});
    }
 
    render(){
       return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route 
                            exact 
                            path="/" 
                            render={props=>(
                                <PostList 
                                {...props}   
                                posts={this.state.posts}
                                handleSelectUser={this.handleSelectUser}
                                editPost={this.editPost}
                                />
                            )}
                         />
                        <Route 
                            exact 
                            path="/postsbyuser" 
                            render={props=>(
                                <PostByUser
                                {...props}
                                postsOfSelectedUser={this.state.postsOfSelectedUser}
                                />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;