import { Button, Card, Col, Grid, Rate, Row } from "antd";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
// import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
const { useBreakpoint } = Grid;
const { Meta } = Card;
const HomeHotSellers = () => {
  const products = useSelector((store) => store.productReducer);
  // const user = useGetAuthenticatedUser();
  const { xs, lg, md } = useBreakpoint();
  console.log(md);
  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: product,
  //   });
  // };

  return (
    <>
      <SectionHeader
        title={"Hot Seller Products"}
        subtitle="some lorem ipsum should tdo the trick"
      />

      <Row
        className="my-2"
        gutter={16}
        justify={lg ? "space-between" : "start"}
      >
        {products.map((product, idx) => (
          <Col className="my-2" xs={!lg && 12} key={idx}>
            <Card
              className="py-2"
              hoverable
              style={{
                width: lg ? 200 : "100%",
                display: lg ? "block" : md ? "flex" : xs ? "block" : "",
              }}
              cover={
                <img
                  alt="example"
                  src={product.productCoverPictureUrl}
                  style={{
                    width:  lg ? 200 : md ? 150 : xs ? 150 : 200,
                    height:  lg ? 200 : md ? 150 : xs ? 150 : 200,
                    objectFit: "contain",
                  }}
                />
              }
            >
              <Meta
                title={product.productName}
                description={"Rs: 4500 | Cotton"}
              />
              <Rate disabled defaultValue={2} />
              <Button
                type="primary"
                block
                className="d-flex justify-content-center align-items-center mt-2"
                size="large"
                icon={<AiOutlineShoppingCart className="me-2" />}
                style={{ borderRadius: "7px" }}
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeHotSellers;

export const SectionHeader = ({ title = "", subtitle = "" }) => {
  return (
    <header className="d-flex flex-column  justify-content-center align-items-center py-2 my-2 ">
      <h1 className="heading-2 text-primary text-weight-regular">{title}</h1>
      <p className="body-2 text-primary-light-800">{subtitle}</p>
    </header>
  );
};
