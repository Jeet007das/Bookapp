import React, { Component } from 'react';
import './../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { bindActionCreators } from 'redux';
import { setRegisterUser } from '../../Redux_Store/Action';


class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            password:''
            
        };
       
    }

registerUser = async () => {
    if(this.state.name != null && this.state.email != null && this.state.password != null){
        let userDetails = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        }
        let response = await this.props.setRegisterUser(userDetails) 
        console.log(response);
         
    }else{
        swal("Register feild is empty", {
            icon: "danger",
          });
          return
    }
    
    }
    render() {
        return(
            <div className="form">
            <h2> Register </h2>
            <section className="form__register">

            <div className="form-group">
                    <label>Name:</label>
                    <input type="text" 
                            className="form-control" 
                            id="name"  
                            placeholder="Enter name"
                            value={this.state.name} 
                            onChange={(name) => this.setState({name:name.target.value})} required />
                </div>

                <div className="form-group">
                    <label >Email:</label>
                    <input type="email" 
                            className="form-control" 
                            id="email"  
                            placeholder="Enter email"
                            value={this.state.email} 
                            onChange={(email) => this.setState({email:email.target.value})}  required/>
                </div>
              
               <div className="form-group">
                    <label >Password:</label>
                    <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            value={this.state.password} 
                            onChange={(password) => this.setState({password:password.target.value})}   required />
                </div>
                <h6>
                    Already register ?
                    <span>
                    <Link to="/books/login" style={{marginLeft : "3px"}} className="btn ">
                                 <b>Login</b>
                    </Link>
                    </span>
                </h6>
            
                <br />
                <button type="submit" className="btn btn-primary" onClick = {() => this.registerUser()}>Register</button>

            </section>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setRegisterUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);