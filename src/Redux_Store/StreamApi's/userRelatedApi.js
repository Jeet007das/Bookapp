import axios from 'axios';
import {baseUrl} from '../../Config/config';

export const getPurchaseData = (action) => {
  return axios({
      method: 'POST',
      url: `${baseUrl}${action.url}`,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      data: action.body
    })
  }

  export const registerUser = (action) => {
   return axios({
      method: 'POST',
      url: `${baseUrl}${action.url}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: action.body
    })
  }
