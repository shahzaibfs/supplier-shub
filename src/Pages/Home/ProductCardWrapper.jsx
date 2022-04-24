import { Grid, Row } from "antd";
import React from "react";

// import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";

const { useBreakpoint } = Grid;

function ProductCardWrapper({ children }) {
  const { lg } = useBreakpoint();

  return (
    <Row
      className="my-3 px-3 py-3 mx-0"
      gutter={8}
      justify={lg ? "space-between" : "start"}
      style={styles.parent}
    >
      {children}
    </Row>
  );
}

export default React.memo(ProductCardWrapper);

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};
