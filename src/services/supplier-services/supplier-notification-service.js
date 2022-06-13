import axios from "axios";

const options = (token) => ({
    headers: {
      Authorization: "bearer " + token,
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  


  export const getSupplierNotificationService  = ({
    token="",hooks={}
  })=>(dispatch)=>{
    const {setData} =hooks;
    axios
    .get(
      "http://localhost:8081/api/v1.0/order-supplier/notificaton-order",
      options(token)
    )
    .then((response) => {
      console.log(response);

      setData(response.data.content);
    })
    .catch((error) => {
      console.log(error);
      
    });
  }
  export const setNotficationOrderToViewedService  = ({
    token=""
  })=>(dispatch)=>{
    axios
    .get(
      "http://localhost:8081/api/v1.0/order-supplier/set-Notification-order",
      options(token)
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      
    });
  }