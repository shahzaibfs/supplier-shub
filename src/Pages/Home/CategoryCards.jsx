import { Card, Col, Row, Grid } from "antd";
import React from "react";

const { Meta } = Card;
const { useBreakpoint } = Grid;

function CategoryCards() {
  const { md } = useBreakpoint();
  return (
    <Row
      className="my-2  py-2 negative-marginTop-50"
      justify={md ? "space-between" : "start"}
    >
      {[...Array(8)].map((_, idx) => (
        <Col className="my-2" xs={!md && 24} key={idx}>
          <Card
            hoverable
            style={{ width: md ? 300 : "100%", display: !md && "flex" }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ width: !md && 150 }}
              />
            }
          >
            <Meta title="Categrory Name" description="maybe Action" />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CategoryCards;
