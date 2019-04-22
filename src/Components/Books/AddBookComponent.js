import React, { Component } from 'react';
import '../../StyleSheet/style.css';
import { addNewBook } from '../../Redux_Store/Action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/HeaderComponent'; 

class AddBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           book_name:'',
           book_description:'',
           book_price:'',
           book_stock:'',
           author_name:'',
        };
       
    }

    addBook = async () => {
        let bookObj = {
            book_name:this.state.book_name,
            description:this.state.book_description,
            price:this.state.book_price,
            stock_count:this.state.book_stock,
            seller_id:localStorage.getItem("_id"),
            author_name:this.state.author_name
        }

        let response =  await this.props.addNewBook(bookObj);
        console.log(response);
        
    }

    render(){
        return(
            <div class="add_form">
                <div className="header_section">
                    <Header />
                </div>
            <div className="form">
            <h2> Add New Book </h2>
            <section className="form__register">

            <div className="form-group">
                    <label>Book Name:</label>
                    <input type="text" 
                            className="form-control" 
                            id="bookname"  
                            placeholder="Enter book name"
                            value={this.state.book_name} 
                            onChange={(book_name) => this.setState({book_name:book_name.target.value})} required />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea type="text" 
                            className="form-control" 
                            id="description"  
                            placeholder="Enter book description"
                            value={this.state.book_description} 
                            onChange={(book_description) => this.setState({book_description:book_description.target.value})} required />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" 
                            className="form-control" 
                            id="price"  
                            placeholder="Enter book price"
                            value={this.state.book_price} 
                            onChange={(book_price) => this.setState({book_price:book_price.target.value})} required />
                </div>

                <div className="form-group">
                    <label>Author Name:</label>
                    <input type="text" 
                            className="form-control" 
                            id="authorname"  
                            placeholder="Enter book author name"
                            value={this.state.author_name} 
                            onChange={(author_name) => this.setState({author_name:author_name.target.value})} required />
                </div>

                <div className="form-group">
                    <label>Stock count:</label>
                    <input type="number" 
                            className="form-control" 
                            id="stockcount"  
                            placeholder="Enter book stock count"
                            value={this.state.book_stock} 
                            onChange={(book_stock) => this.setState({book_stock:book_stock.target.value})} required />
                </div>

                 <br />
                <button type="submit" className="btn btn-primary" onClick = {() => this.addBook()}>Add Book</button>

            </section>
        </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log(state);
    return {
        // bookLists: state.book.bookLists
        //currentUserId: state.auth.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addNewBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookComponent);