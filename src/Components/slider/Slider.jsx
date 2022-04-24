import { Button, Col, Row } from "antd";
import React, { useRef } from "react";

import "./__slider.css";



function Slider({ negative = false, my = 3, children }) {
  const sliderRef = useRef(null);
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <Row
      wrap={false}
      className={`py-4  my-${my}   slider__parent ${
        negative && "margin-top-negative"
      }`}
      align="middle"
      style={styles.sliderParent}
    >
      <Col className="me-3">
        <Button onClick={slideLeft} style={styles.sliderButton}>
          <b>{"<"}</b>
        </Button>
      </Col>

      <Col className="overflow-hidden">
        <Row
          ref={sliderRef}
          wrap={false}
          id={"slider"}
          style={styles.sliderCard}
        >
          {children}
        </Row>
      </Col>
      <Col className="ms-3">
        <Button onClick={slideRight} style={styles.sliderButton}>
          <b>{">"}</b>
        </Button>
      </Col>
    </Row>
  );
}

export default React.memo(Slider);

const styles = {
  sliderParent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
    zIndex: 10,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::WebkitScrollbar": { display: "none" },
  },
  sliderButton: { height: "100px" },
  sliderCard: { overflowX: "auto", scrollBehavior: "smooth" },
  sliderCardImg: { width: "200px", height: "200px", objectFit: "cover" },
};
