import { Alert } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonField from "../../Components/Inputs/button-field";
import { addPrdouctsTocart } from "../../services/customer-services/customer-cart-service";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const ProccedToCheckout = ({ cartProducts = [] }) => {
  const [isLoading, setisLoading] = useState({
    state: "ok",
    message: "",
  });
  const user = useSelector((store) => store.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    const total = cartProducts.reduce((sum, cur) => {
      return sum + cur.quantity * cur.product.productPrice;
    }, 0);

    return total;
  };

  const handleProccedToCheckout = () => {
    console.log("Procceed to checkout  : ", cartProducts);
    setisLoading({
      state:"loading"
    })
    let cartProductReq = cartProducts.map(
      ({ quantity, product: { productId } }) => {
        return { quantity, productId };
      }
    );
    dispatch({
      type: "PROCCED_TO_CHECKOUT",
      payload: cartProducts,
    });
    dispatch(
      addPrdouctsTocart({
        token: user.token,
        cartProductsReq: cartProductReq,
        hooks: {setisLoading,navigate},
      })
    );
  };

  return (
    <section
      className="col-lg-3  flex-grow-0 mt-3 mt-lg-0"
      style={styles.parent}
    >
      <header
        className=" d-flex align-items-center body-1 text-primary-light-700 text-weight-bold border-bottom-primary mb-2"
        style={{ height: "50px" }}
      >
        Summary
      </header>
      <p className="body-2  text-primary mb-2">Estimate Shipping and Tax </p>
      <form className="border-bottom-primary py-2">
        <label className="text-primary-light-700 text-weight-regular body-2 mb-2">
          State
        </label>
        <select
          className="form-select  text-primary body-2 mb-2"
          aria-label="Default select example"
        >
          <option value="1">Islamabad</option>
          <option value="2">Lahore</option>
          <option value="3">Karachi</option>
        </select>
        <label className="text-primary-light-700 text-weight-regular body-2 my-2">
          Fast Delivery
        </label>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 ">
            Within next two days
          </label>
        </div>
        <label className="text-primary-light-700 text-weight-regular body-2 my-2">
          Regular Delivery
        </label>
        <div className="form-check mb-2  ">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label body-2 text-primary-light-700 text-weight-regular body-2 ">
            Within a week
          </label>
        </div>
      </form>
      <div className="py-2 border-bottom-primary">
        <div className="d-flex justify-content-between mb-2">
          <p className="text-primary-light-700 text-weight-regular body-2 mb-0">
            Subtotal
          </p>
          <p className="text-primary-light-700 text-weight-regular body-2 mb-0">
          Rs {getTotalPrice()}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-primary-light-700 text-weight-regular body-2 mb-0">
            tax
          </p>
          <p className="text-primary-light-700 text-weight-regular body-2 mb-0">
            Rs 00.00
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center py-2">
        <p className="text-primary text-weight-regular body-1 mb-0">Total</p>
        <p className="text-primary text-weight-regular body-1 mb-0">
          Rs {getTotalPrice()}
        </p>
      </div>
      <ButtonField
        loading={isLoading.state === "loading"}
        size="large"
        type="success"
        classnames={"my-3"}
        width="100"
      >
        {user.isLogin && cartProducts.length ? (
          <div onClick={handleProccedToCheckout}>Procced to Checkout</div>
        ) : (!user.isLogin || user.isLogin) && !cartProducts.length ? (
          <Link to={"/"}>Add Products to Cart </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </ButtonField>
      {isLoading.state === "error" && (
        <Alert message={isLoading.message} type="error" className="mb-3" />
      )}
    </section>
  );
};

export default ProccedToCheckout;
