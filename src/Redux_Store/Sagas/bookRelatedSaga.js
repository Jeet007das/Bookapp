import { put, call } from "redux-saga/effects";
import * as actions from "../Action";
import { getBookData,purchaseBook, addBook } from "../StreamApi's/bookRelatedApi";
import swal from 'sweetalert';
import history from '../../routingHistory';

export function* getBookList(action) {
    try{
        let response = yield call(getBookData, {url:'/books/_getBooksLists'})
        if(response.status === 200){
            yield put(actions.setBooksLists(response.data.bookLists))
        }
    }catch(err){
        console.error(err);
        swal("Network Connection Problem",{
            icon: "warning",
          });
    }
}

export function* buyBook(action) {
    console.log(action);
    
    try{
        let response = yield call(purchaseBook, {url:'/purchase/_buyBook', body:action.payLoad})
        console.log(response);
        
        if(response.status === 200){
            yield put(actions.setStockCount(response.data.stock_details))
            swal("Purchase done successfully, Go to account to view order",{
                icon: "success",
              });
        }
    }catch(err){
        console.error(err);
        swal("Network Connection Problem, please try after sometime",{
            icon: "warning",
          });
    }
}


export function* addNewBook(action) {
    console.log(action);
    
    try{
        let response = yield call(addBook, {url:'/books/_addNewBook', body:action.payLoad})
        if(response.status === 201){
            swal("Book Added Successfully",{
                icon: "success",
              });
              history.push('/')
            
        }
    }catch(err){
        console.error(err);
        swal("Network Connection Problem, please try after sometime",{
            icon: "warning",
          });
    }
}
