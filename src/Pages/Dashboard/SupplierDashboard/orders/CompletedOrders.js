import CompletedOrdersTable from "./CompletedOrderTable";
import PageHeader from "../../../../Components/PageHeader/PageHeader";

function CompletedOrders() {
  return (
    <section>
      <PageHeader
        heading={"Completed Orders"}
        subtitle="Manage And Track orders "
        classname={"my-2 mb-3"}
      />{" "}
      <CompletedOrdersTable />{" "}
    </section>
  );
}

export default CompletedOrders;
