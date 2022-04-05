import axios from "axios";

export const getRoles = () => axios.get("http://localhost:8081/api/v1.0/roles");


