import { useState, useEffect } from "react";
import { getRoles } from "../services/role-service";

export function useGetRoles() {
  const [roles, setroles] = useState([]);

  useEffect(() => {
    getRoles()
      .then((res) =>{
          setroles(old=>res.data)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return roles;
}
