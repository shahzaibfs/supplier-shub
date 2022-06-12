import PageHeader from "../../../../Components/PageHeader/PageHeader";
import ActiveOrdersTable from "./ActiveOrdersTable";

function CompletedOrders() {
  return (
    <section>
      <PageHeader
        heading={"Completed Orders"}
        subtitle="Manage And Track orders "
        classname={"my-2 mb-3"}
      />{" "}
      <ActiveOrdersTable />{" "}
    </section>
  );
}

export default CompletedOrders;
