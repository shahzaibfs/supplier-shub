import { Empty } from "antd";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
    minHeight: "100%",
    width: "100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
};

function CompletedOrders() {
  return (
    <section style={styles.parent} >
    <Empty description="Coming Soon"/>
    </section>
  )
}

export default CompletedOrders