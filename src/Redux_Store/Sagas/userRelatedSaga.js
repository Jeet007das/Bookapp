import { put, call } from "redux-saga/effects";
import * as actions from "../Action";
import { getPurchaseData, registerUser } from "../StreamApi's/userRelatedApi";
import swal from 'sweetalert';
import history from '../../routingHistory';

export function* getPurchaseList(action) {
    let data = {
        user_email:action.payLoad
    }
    if(data.user_email === null){
        swal("No Valid User, Please login again",{
            icon: "warning",
          });
    }else{
        try{
            let response = yield call(getPurchaseData, {url:'/purchase/_getPurchaseList', body : data})
            if(response.status === 200){
                yield put(actions.setPurchaseDetails(response.data.purchaseList))
            }else if(response.status === 404){
                swal("Purchase details not found",{
                    icon: "warning",
                  });
            }
        }catch(err){
            console.error(err);
            swal("Network Connection Problem",{
                icon: "warning",
              });
        }
    }
  
}

export function* registerUserDetail(action) {
     try{
            let response = yield call(registerUser, {url:'/users/register', body : action.payLoad})
            if(response.status === 201){
                swal("Register Successfully",{
                    icon: "success",
                  });
            history.push('/books/login')  
            }else if(response.status === 404){
                swal("Purchase details not found",{
                    icon: "warning",
                  });
            }
        }catch(err){
            console.error(err);
            swal("Email id already exits",{
                icon: "warning",
              });
        }
    
  
}