import React, { Component } from 'react';
import './../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {baseUrl} from '../../Config/config';
import swal from 'sweetalert';
import history from '../../routingHistory';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            validation:''
        };
       
    }

    login = async () => {
       axios.post(baseUrl+'/users/login',{email: this.state.email, password: this.state.password })
          .then(function (response) {
              console.log(response);
              
            if(response.status === 201){
                localStorage.setItem('token', response.data.web_token); 
                localStorage.setItem('role', response.data.role[0]);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('_id', response.data._id);
                localStorage.setItem('email', response.data.email);
                history.push('/')
            }else {
                this.setState({
                    email:'',
                    password:''
                });
                swal("Access denied", {
                    icon: "danger",
                  });
            }
          })
          .catch(function (error) {
             swal("Access Denied, please try again", {
                icon: "danger",
              });
          });
        
    }
    render() {
        return(
            <div class="form">
                <section className="form__login">
                <h2>Login </h2>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" 
                                class="form-control"
                                placeholder="Enter email"
                                value={this.state.email} 
                                onChange={(email) => this.setState({email:email.target.value})}  required/>
                    </div>
                  
                   <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" 
                               class="form-control" 
                               placeholder="Password" 
                               value={this.state.password} 
                                onChange={(password) =>  this.setState({password:password.target.value})
                                 } required />
                    </div>
                    {
                        this.state.validation === 'true' ?
                        <span style={{color:"red", fontSize:"4px"}}>Feild should not be empty</span>:null
                    }
                    
                    <br />
                    <h6>
                        Are you new to here?
                        <span>
                        <Link to="/books/register" style={{marginLeft : "3px"}} className="btn ">
                                     <b>Register</b>
                        </Link>
                        </span>
                    </h6>
                
                    <br />
                    <button type="submit" class="btn btn-primary" onClick={() => this.login()}>Login</button>

                </section>
            </div>
        )
    }
}

export default LoginComponent;