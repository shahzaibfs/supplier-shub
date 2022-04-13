import { useSelector } from "react-redux";
export const  useGetSupplierProfileData =() => {
  const supplierProfileData = useSelector(
    (store) => store.supplierProfileReducer
  );

  return supplierProfileData;
}
