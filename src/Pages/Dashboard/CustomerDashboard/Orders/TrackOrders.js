import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputNumberField from "../../../../Components/Inputs/number-field";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import SearchForm from "../../../../Components/SearchContainer/SearchForm";
import { useGetAuthenticatedUser } from "../../../../hooks/useGetAuthenticatedUser";
import { getSearchOrderResultService } from "../../../../services/customer-services/customer-order-service";
import TrackOrderTable from "./TrackOrderTable";

function TrackOrders() {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const user = useGetAuthenticatedUser();
  const searchFormFields = [
    {
      inputType: InputNumberField,
      label: "Order Id",
      placeHolder: "Enter Order Id ",
      width: "80%",

      name: "orderId",
    },
  ];
  const buttonInfo = {
    type: "primary",
    text: "Search",
    classname: "pt-2",
  };

  const handleSearchSubmit = (data) => {
    console.log(data);
    dispatch(
      getSearchOrderResultService({ token: user.token, orderId: data.orderId ,hooks:{setOrders}})
    );
  };
  return (
    <section className="p-3">
      <PageHeader
        heading={"Track Orders "}
        subtitle="Keep Track Of your Orders "
      />
      <SearchForm
        classname={"my-3"}
        handleSubmit={handleSearchSubmit}
        formFields={searchFormFields}
        buttonInfo={buttonInfo}
      />
      <TrackOrderTable orders={orders} setOrders={setOrders} />
    </section>
  );
}

export default TrackOrders;
