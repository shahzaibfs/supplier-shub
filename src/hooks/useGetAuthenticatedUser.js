import { useSelector } from "react-redux"

export function useGetAuthenticatedUser() {

    const authReducer = useSelector(store => store.authReducer)

    return authReducer;
}