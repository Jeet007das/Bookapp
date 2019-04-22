import * as actionTypes from '../Action/actionTypes';

const initState = {
    purchaseList: [],
    purchaseData:{}
}


export default function (state = initState, action) {
switch (action.type) {
     case actionTypes.GET_PURCHASE_LISTS:
            return {...state, purchaseData: {}}
     case actionTypes.SET_PURCHASE_LISTS:
            return{...state, purchaseList : action.payLoad }
     case actionTypes.SET_REGISTER_DETAILS:
            return{...state, userDetials: action.payLoad}
     default:
            return state;
    }
}