import PageHeader from "../../../../Components/PageHeader/PageHeader";
import TrackOrdersTable from "./TrackOrdersTable";



function CompletedOrders() {
  return (
    <section  >
        <PageHeader
        heading={"Track Orders"}
        subtitle="Manage And Track orders "
        classname={"my-2 mb-3"}
      />
      <TrackOrdersTable />
    </section>
  )
}

export default CompletedOrders 