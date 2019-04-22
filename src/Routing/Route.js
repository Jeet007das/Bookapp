import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
//here is route of app
// import Header from '../Components/Header/HeaderComponent';
import BookList from '../Components/Books/BookListComponent';
import LoginComponent from '../Components/Login/LoginComponent';
import RegisterComponent from '../Components/Register/RegisterComponent';
import UserAccountComponent from '../Components/Books/UserAccountComponent';
import AddBookComponent from '../Components/Books/AddBookComponent';


import history from '../routingHistory';


class Routing extends Component {
    render() {
        return (
            <div>
                <Router history= {history }>
                    <div style={{height:"100vh", overflow:"visible"}}>
                        {/* <Header /> */}
                        <Route path="/" exact component={BookList} />
                        <Route path="/books/login" exact component={LoginComponent}/>
                        <Route path="/books/register" exact component={RegisterComponent}/>
                        <Route path="/users/account" exact component={UserAccountComponent}/>
                        <Route path="/book/add" exact component={AddBookComponent}/>
                     </div>
                </Router>

            </div>
        )
    }
}

export default Routing;