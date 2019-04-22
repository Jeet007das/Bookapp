import axios from 'axios';
import {baseUrl} from '../../Config/config';


  export const getBookData = (action) => {
    return axios({
      method: 'GET',
      url: `${baseUrl}${action.url}`, //end point :    books/_getBooksList
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  export const purchaseBook = (action) => {
    console.log(action);
    
    return axios({
      method: 'POST',
      url: `${baseUrl}${action.url}`, 
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      data:action.body
    })
  }

  export const addBook = (action) => {
    console.log(action);
    
    return axios({
      method: 'POST',
      url: `${baseUrl}${action.url}`, 
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      data:action.body
    })
  }

  