import React from "react";
import PageHeader from "../../../../Components/PageHeader/PageHeader";
import TrackOrderTable from "./TrackOrderTable";



function TrackOrders() {
  return (
    <section  className="p-3">
      <PageHeader
        heading={"Track Orders "}
        subtitle="Keep Track Of your Orders "
      />
      <TrackOrderTable />
    </section>
  );
}

export default TrackOrders;
