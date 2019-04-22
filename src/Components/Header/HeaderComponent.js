import React, { Component } from 'react';
import './../../StyleSheet/style.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import history from '../../routingHistory';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:''
        };
       
    }

    componentDidMount(){
        let name = localStorage.getItem('name')
        this.setState({
            name:name
        })
    }

    logout(){
       localStorage.clear()
        this.componentDidMount()
        history.push('/')

    }


    render() {
      return (
            <div className="header">
                <div className="header__section">
                    <div className="header__label">
                    <Link to="/" className="item">
                            <h3><b>My Book Shop</b></h3>
                    </Link>
                   </div>
                   <div className="sell_book">
                   {
                     localStorage.getItem('role') === 'ROLE_ADMIN' ? 
                       <Link to="/book/add" style={{ margin: "1px", borderRadius: "4px" }} className="btn btn-outline-success">
                             <b>Sell Book</b>
                       </Link>:null
                   }
                   </div>
                
                    <div className="header__btn--1">
                        {
                            localStorage.getItem('token') ?
                                <Link to="/users/account" style={{marginLeft : "5px"}} className="btn btn-outline-success">
                                    Welcome, {this.state.name}
                                </Link> :

                                <Link to="/books/login" style={{  borderRadius: "20px" }}  className="btn btn-outline-success">
                                    <b>Login </b>
                                </Link>
                        }

                          {
                            localStorage.getItem('token')  ?
                            <button className="btn btn-outline-success" onClick={() => this.logout()}>
                                 Logout
                            </button>:
                                <Link to="/books/register" style={{ margin: "3px", borderRadius: "20px" }} className="btn btn-outline-success">
                                    <b>Register</b>
                                </Link>
                        }
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, null)(Header);