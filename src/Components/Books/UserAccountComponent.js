import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPurchaseDetails } from '../../Redux_Store/Action';
import '../../StyleSheet/style.css';
import { Link } from 'react-router-dom';
import Header from '../Header/HeaderComponent';
import swal from 'sweetalert';


class UserAccountComponent extends Component {

    componentDidMount() {
        let user_email = localStorage.getItem('email');
        (user_email) ? this.props.getPurchaseDetails(user_email) : swal("You have login first, to see your account details");
    }

    render() {
        return (
            <div className="section-purchase">
                <div className="header">
                    <Header />
                </div>
                <div className="purchase__detail">
                    <div className="heading">
                        <h3>Order's details</h3>
                    </div>

                    <div className="purchase__section">
                        <div className="heading">
                            <h3 style={{ color: "white" }}>You Have Purchase {this.props.purchaseDetails.length} book's</h3>
                        </div>
                        {
                            (this.props.purchaseDetails.length) > 0 ?
                                <div class="book_list">
                                    {
                                        (this.props.purchaseDetails).map((item, key) => {

                                            return (
                                                <ul className="list">
                                                    <li ><h3 style={{ color: "white" }}>Book Name:{item.book_name}</h3></li>
                                                    <li><p style={{ color: "white" }}>{item.description}</p></li>
                                                    <li style={{ color: "white" }}>Author Name: <b><h4>{item.author_name}</h4></b></li>
                                                     <li style={{ color: "white" }}><h5>Cost: {item.price}/- only</h5></li> 
                                                    <br />

                                                </ul>
                                            )

                                        })
                                    }
                                </div> :
                                <div className="no-purchase">
                                    <h3>Purchase record not found!!!, Visit to home page to buy some book
                            <Link to="/" className="item">
                                            <h3><b>Home</b></h3>
                                        </Link>
                                    </h3>
                                </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        purchaseDetails: state.user.purchaseList
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPurchaseDetails
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountComponent);
