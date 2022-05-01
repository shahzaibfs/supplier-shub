import { Col, Grid, Typography } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doPostProductToCart } from "../../services/cart-service";
import { doGetAllNewProductsFromDatabase } from "../../services/public-product-service";
import ProductCard from "./productCard";
import ProductCardWrapper from "./ProductCardWrapper";

const { useBreakpoint } = Grid;

const { Text, Title } = Typography;
const HomeHotSellers = () => {
  const products = useSelector((store) => store.productReducer);
  const dispatch = useDispatch();
  const { lg } = useBreakpoint();

  console.log(products);

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(doGetAllNewProductsFromDatabase());
    // eslint-disable-next-line
  }, [dispatch, products]);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(doPostProductToCart(product));
      console.log(product);
    },
    [dispatch]
  );

  if (products.length <= 0) {
    return <Text type="danger">Network Err : Please Try Again Later</Text>;
  }

  return (
    <ProductCardWrapper>
      {products.map((product, idx) => (
        <Col className="my-2" xs={!lg && 12} key={idx}>
          <Link to="">
            <ProductCard handleAddToCart={handleAddToCart} product={product} />
          </Link>
        </Col>
      ))}
    </ProductCardWrapper>
  );
};

export default HomeHotSellers;

export const SectionHeader = ({
  title = "",
  level = 2,
  subtitle = "",
  justify = "center",
  classnames = "",
}) => {
  return (
    <header
      style={styles.parent}
      className={`d-flex flex-column py-3 my-3  justify-content-${justify} align-items-center  ${classnames}`}
    >
      <Title level={level} className="mb-1">
        {title}
      </Title>
      <Text>{subtitle}</Text>
    </header>
  );
};

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};
