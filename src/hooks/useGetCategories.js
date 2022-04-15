import { useSelector } from "react-redux";

export const useGetCategories = () => {
  return useSelector(store  =>store.categoryReducer);
};
