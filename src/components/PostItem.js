import React from 'react';
import { Route } from 'react-router-dom';

class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showInput:false
        }
    }
    handleSelect=()=>{
       this.props.handleSelectUser(this.props.post.userId);
    }

    toggleInput = ()=>{
        this.setState({showInput: !this.state.showInput})
    }

    updatePost=()=>{
        let id = this.props.post.id;
        let text=this.refs.post.value;
        this.props.editPost(id,text);
        console.log("refs:",this.refs);
    }

    render(){
        let editStyle={};
        if(this.state.showInput===false){
            editStyle={display:'none'};
        }
        return (
            <div ref="mydiv" key={this.props.post.id} >
                <div>
                    <h4>Title: {this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <Route render={({history})=>(
                        <p onClick={()=>{
                            this.handleSelect();
                            history.push('/postsbyuser')
                        }}>UserId: {this.props.post.userId}</p>
                    )}/>
                    <button onClick={this.toggleInput}>edit</button>
                </div>  
                <div style={editStyle}>
                    <input type='text'  ref="post"/>
                    <button ref="button" onClick={()=>{
                        this.updatePost()
                        this.toggleInput()}}>
                        Summit
                    </button>
                </div>                       
            </div>
        )
    }
    
}
export default PostItem;