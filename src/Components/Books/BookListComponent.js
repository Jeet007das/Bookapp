import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooksLists, purchaseBook } from '../../Redux_Store/Action';
import '../../StyleSheet/style.css';
import StackGrid from "react-stack-grid";
import swal from 'sweetalert';
import Header from '../Header/HeaderComponent';


class BookListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            bookLists:[]
        };

    }

    componentDidMount() {
        this.props.getBooksLists()
    }

    buyBook = async (book_id) => {
         this.renderBookList();
        let email = localStorage.getItem('email');
        let purchase = {
            user_email: email,
            book_id: book_id
        }
        if (email) {
            this.props.purchaseBook(purchase)
        } else {
            swal("Login first", { icon: "warning" });
        }
    }


    renderBookList = () => {
        let bookListTemp = []
        if(Object.entries(this.props.stockDetail).length !== 0){
            let bookListTemp = []
           
            for (let bookLists of this.props.bookLists) {
                if(bookLists._id === this.props.stockDetail._id){
                    bookLists.stock_count = this.props.stockDetail.stock_count;
                }
                bookListTemp.push(bookLists);
            }
     }
    
     
     if((bookListTemp.length === 0)){
        bookListTemp = this.props.bookLists;
     }

       
       return bookListTemp.map((item, key) => {
         return (
                <div className="stack_grid">
                    <StackGrid
                        columnWidth={550}
                        columnHeight={160}
                    >
                        <div key="key">
                            <h4 style={{ color: "white" }}>{item.book_name}</h4>
                            <p style={{ color: "white" }}>{item.description}</p>
                            <h4 style={{ color: "white" }}>Rs: {item.price}</h4>

                            {
                                (item.stock_count) !== 0 && (item.stock_count > 0) ?
                                    <a className="#" class="btn btn-primary" onClick={() => { this.buyBook(item._id) }}>Buy Now</a> :
                                    <h4 style={{ color:"red", backgroundColor:"white"}}><b>
                                        Product is out of stock.
                                </b></h4>
                            }
                        </div>
                    </StackGrid>

                </div>

             )
        });
    }
    render() {
       return (
            <div className="main">
                <div className="header">
                    <Header />
                </div>
                <div className="books" >
               <h2 className="heading">Books</h2>
                <div className="books__booklist">
                    {
                        (this.props.bookLists != null) ?
                            this.renderBookList() :

                            <div class="books__section">
                                <h3 style={{ color: "red" }}>Sorry!!! No Book found!</h3>
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
        bookLists: state.book.bookLists,
        stockDetail: state.book.stockDetail
       
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBooksLists,
        purchaseBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListComponent);