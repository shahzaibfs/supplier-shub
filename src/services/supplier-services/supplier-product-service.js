import axios from "axios";
import { message } from "antd";

const options = (token) => ({
  headers: {
    Authorization: "bearer " + token,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const supplierEditApi = (supplierProfileDetails, token) =>
  axios.post(
    "http://localhost:8081/api/v1.0/supplier/edit",
    supplierProfileDetails,
    options(token)
  );
