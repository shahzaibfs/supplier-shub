import { useSelector } from "react-redux"

export function useGetSupplierAddresses() {

    const supplierAddresses = useSelector(store => store.supplierAddressesReducer)

    return supplierAddresses;
}