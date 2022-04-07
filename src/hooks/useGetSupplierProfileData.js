import { useState, useEffect } from "react";
import { getSupplierProfileData } from "../services/supplier-services/supplier-profile-service";

export function useGetSupplierData(token,refreshData) {
  const [supplierProfileData, setsupplierProfileData] = useState({});

  useEffect(() => {
    getSupplierProfileData(token)
      .then((res) => {
        console.log(res)
        setsupplierProfileData((old) => res.data);
        
      })
      .catch((err) => {
        console.log(err.response);
      });
      // eslint-disable-next-line
  }, [token,refreshData]);

  return supplierProfileData;
}
