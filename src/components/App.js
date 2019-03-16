import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import PostList from './PostList';
import PostByUser from './PostByUser';

class App extends React.Component{
    render(){
       return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component = {PostList} />
                        <Route exact path="/postsbyuser" component={PostByUser} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;