import { message } from "antd";
import axios from "axios";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});


const editUserAPi = (userDetails, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/user/edit",
    userDetails,
    options(token)
  );

export const doEditUser =
  (userDetails, token,{seterrorOnEdit,setisModalVisible,setisLoader}) =>
 async (dispatch) => {
 
   editUserAPi(userDetails, token)
      .then((response) => {
        console.log(response);
        message.success("the record has been updated")
        seterrorOnEdit(old=>({
          isErr:false,
          err:''
        }))
        setisModalVisible(false)
        setisLoader(false)
       
      })
      .catch((error) => {
       console.log(error.response)
       seterrorOnEdit(old=>({
         isErr:true,
         err:error.response.data.error
       }))
       setisModalVisible(true)
       setisLoader(false)
       
      });


  };
