import * as actionTypes from "./actionTypes";


export const signIn = (userId) => {
    return {
        type: actionTypes.SIGNED_IN,
        userId: userId
    }
}


export const signOut = () => {
    return {
        type: actionTypes.SIGNED_OUT,
    }
}



//here we create action function
export const getBooksLists = () => {
    return {
        type: actionTypes.GET_BOOKS_LISTS,
    }
}

export const setBooksLists = (obj) => {
    return {
        type: actionTypes.SET_BOOKS_LISTS,
        payLoad: obj
    }
}

export const getPurchaseDetails = (obj) => {
    return {
        type: actionTypes.GET_PURCHASE_LISTS,
        payLoad: obj
    }
}

export const setPurchaseDetails = (obj) => {
    return {
        type: actionTypes.SET_PURCHASE_LISTS,
        payLoad: obj
    }
}

export const setRegisterUser = (obj) => {
    return {
        type: actionTypes.SET_REGISTER_DETAILS,
        payLoad: obj
    }
}

export const purchaseBook = (obj) => {
    return {
        type: actionTypes.PURCHASE_BOOK,
        payLoad: obj
    }
}

export const addNewBook = (obj) => {
    return {
        type: actionTypes.ADD_BOOK,
        payLoad: obj
    }
}


export const setStockCount = (obj) => {
    console.log("in auth related action ");
    console.log(obj);
    
    
    return {
        type: actionTypes.SET_STOCK_COUNT,
        payLoad: obj
    }
}









