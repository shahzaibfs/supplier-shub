import { Grid, Row, Typography } from "antd";
import React from "react";
const { useBreakpoint } = Grid;
const { Text } = Typography;

function CategoryCards({ mt = 0, mb = 0, negative }) {
  const { xl } = useBreakpoint();

  return (
    <Row
      className={`mb-${mb}  mt-${mt}  ${negative && "negative-marginTop-50"} `}
      justify="space-between"
      wrap={xl}
      style={{ maxWidth: "100%", overflowX: !xl ? "auto" : "hidden" }}
    >
      {[...Array(16)].map((_, idx) => (
        <CategoryCard key={idx}/>
      ))}
    </Row>
  );
}

export default CategoryCards;

const CategoryCard = () => {
  return (
    <div >
      <div
        hoverable
        className="d-flex justify-content-center align-items-center flex-column ant-card-bordered bg-white ant-card-hoverable"
        style={{ width: 150, height: 150 }}
      >
        <img
          style={{ width: 80 }}
          height={80}
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        <Text className="mt-1">some text </Text>
      </div>
    </div>
  );
};
