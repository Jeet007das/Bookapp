import * as actionTypes from '../Action/actionTypes';

const initState = {
       bookLists: [],
       bookData: {},
       stockDetail:{}
}


export default function (state = initState, action) {
       console.log(action.payLoad);
       
       switch (action.type) {
              case actionTypes.GET_BOOKS_LISTS:
                     return { ...state, bookData: {} }
              case actionTypes.SET_BOOKS_LISTS:
                     return { ...state, bookLists: action.payLoad }
              case actionTypes.PURCHASE_BOOK:
                     return { ...state }
              case actionTypes.ADD_BOOK:
                     return { ...state }
              case actionTypes.SET_STOCK_COUNT:
                     return { ...state, stockDetail:action.payLoad }
              default:
                     return state;
       }
}