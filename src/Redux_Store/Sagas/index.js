import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../Action/actionTypes";

import { getBookList, buyBook, addNewBook } from './bookRelatedSaga';
import { getPurchaseList, registerUserDetail } from './userRelatedSaga';

export function* watchStreamCreation() {
    //here we generator function for book related saga
    yield takeLatest(actionTypes.GET_BOOKS_LISTS, getBookList)
    yield takeLatest(actionTypes.GET_PURCHASE_LISTS, getPurchaseList)
    yield takeLatest(actionTypes.SET_REGISTER_DETAILS, registerUserDetail)
    yield takeLatest(actionTypes.PURCHASE_BOOK, buyBook)
    yield takeLatest(actionTypes.ADD_BOOK, addNewBook)

}