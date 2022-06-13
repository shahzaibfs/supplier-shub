import { Typography } from "antd";
import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import {  useDispatch, useSelector } from "react-redux";
import SupplierProfileDrawer from "../../Components/Drawers/SupplierProfileDrawer";
import { doPostProductToCart } from "../../services/cart-service";

const { Paragraph, Title } = Typography;

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const ProductPriceDetailSection = ({ product }) => {
  const [visible, setIsVisible] = useState(false);
  const authReducer = useSelector((store) => store.authReducer);
const dispatch = useDispatch();

  const handleAddToCart = () => {

    dispatch(doPostProductToCart(product));

  };
  const handleSupplierProfile = () => {
    setIsVisible(true);
  };
  return (
    <div
      className="col-12 p-3 px-3 col-lg-5 flex-grow-0  h-75  mt-3 mt-lg-0 "
      style={{ minHeight: "2vh", height: "max-content", ...styles.parent }}
    >
      {/* heading */}
      <div style={{ display: "flex", alignItems: "end" }}>
        {" "}
        <h1 className="heading-2 text-capitalize mt-0 pt-0 text-primary-light-700 text-weight-regular  ">
          {product.productName}
        </h1>
        <Title
          className="ms-2 mb-3 "
          type="danger"
          level={4}
          style={{ cursor: "pointer" }}
          onClick={handleSupplierProfile}
        >
          <span className="text-primary-light-700">~By :</span>{" "}
          {product.supplier.brandName}
        </Title>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi quas
        error tenetur expedita aut excepturi reprehenderit? Distinctio qui,
        inventore accusantium repudiandae ducimus consequuntur cumque ut tempora
        corporis a excepturi facere nam corrupti harum doloribus!
      </Paragraph>
      {/* rating stuff */}
      <div className="d-flex align-items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <AiOutlineStar key={index} className="me-1 text-muted" />
        ))}

        <p className="mx-2 text-decoration-underline text-muted body-2 my-0 text-weight-regular">
          4 reviews
        </p>
      </div>
      {/* pricing stuff */}
      <div className="py-2 border-bottom-primary d-flex justify-content-between align-items-center">
        <div className="flex-item">
          <p className="body-2 text-primary-light-700 text-weight-regular mb-0">
            As low As
          </p>
          <div className="text-primary-light-700 text-weight-bold heading-2">
            {product.productPrice} Rs{" "}
            <span className="body-2 text-weight-regular">
              per {product.productWeight}
            </span>
          </div>
        </div>
        <div className="flex-item mx-2 ">
          <p className="text-primary body-2 text-uppercase mb-1">
            {product.outOfStock !== null ? "In stock" : "Out Of Stock"}
          </p>
          <p className=" body-2 text-muted mb-0">SKU#: 24-MB05</p>
        </div>
      </div>
      {/* add to cart */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="text-primary-light-700 text-weight-regular body-2 my-2">
          Delivery Time
        </label>
        <select
          className="form-select w-25 text-primary body-2"
          aria-label="Default select example"
        >
          <option value="normal">Normal</option>
          <option value="fast">Fast </option>
        </select>
        {authReducer.userDetails.accountType !== "SUPPLIER" ? (
          <button
            onClick={handleAddToCart}
            className="my-4 text-white body-2 btn btn-bg-primary w-50 d-flex align-items-center justify-content-center"
          >
            Add to cart <AiOutlineShoppingCart className="mx-2" />
          </button>
        ) : null}
      </form>
      {/* bottom actions  */}
      <div className="d-flex  align-items-center my-2">
        {authReducer.userDetails.accountType !== "SUPPLIER" ? (
          <div
            className="body-1 text-primary-light-700 flex-item "
            style={{ cursor: "pointer" }}
          >
            <AiOutlineHeart className="me-1 " /> <span>Add to wishlist</span>
          </div>
        ) : null}
        <div
          className="body-1 text-primary-light-700 flex-item ms-4"
          style={{ cursor: "pointer" }}
        >
          <AiOutlineMail className="me-1 " /> <span>Email</span>
        </div>
      </div>
      <SupplierProfileDrawer
        supplierId={product.supplier.supplierId}
        visible={visible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default ProductPriceDetailSection;
