import axios from "axios"

export const doAuth = (loginDetails)=>axios
.post("api/v1.0/authenticate",loginDetails);
