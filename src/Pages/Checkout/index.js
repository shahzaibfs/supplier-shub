import { Divider, Form, Typography } from "antd";
import React, { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerShippingAddressService } from "../../services/customer-services/customer-shipping-address-service";
import { useGetAuthenticatedUser } from "../../hooks/useGetAuthenticatedUser";
import SelectField from "../../Components/Inputs/SelectField";
import ButtonField from "../../Components/Inputs/button-field";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const { Text } = Typography;

function Checkout() {
  const checkoutState = useSelector((store) => store.checkoutReducer);
  const user = useGetAuthenticatedUser();
  const shippingAddresses = useSelector(
    (store) => store.customerShippingAddressReducer
  );
  const dispatch = useDispatch();
  console.log(shippingAddresses);

  const getTotalPrice = () => {
    const total = checkoutState.reduce((sum, cur) => {
      return sum + cur.quantity * cur.product.productPrice;
    }, 0);

    return total;
  };

  useEffect(() => {
    dispatch(
      getCustomerShippingAddressService({ token: user.token, hooks: {} })
    );
  }, [user.token,dispatch]);

  return (
    <>
      {/* @ compp */}
      <header
        className="d-flex my-2 align-items-center justify-content-center justify-content-md-start"
        style={{ height: "70px" }}
      >
        <div
          className="flex-item text-center text-primary body-2 text-weight-bold "
          style={{ minWidth: "150px" }}
        >
          <div className="position-relative d-flex justify-content-center">
            <div
              className="position-absolute bg-primary"
              style={{
                width: "100%",
                height: "5px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="rounded-circle  bg-white d-flex justify-content-center align-items-center border-2 border-primary-5 "
              style={{ width: "35px", height: "35px", zIndex: 2 }}
            >
              <AiOutlineCheck className="body-1 text-weight-bold " />
            </div>
          </div>
          Shipping
        </div>
        <div
          className="flex-item text-center text-primary body-2 text-weight-bold "
          style={{ minWidth: "150px" }}
        >
          <div className="position-relative d-flex justify-content-center">
            <div
              className="position-absolute bg-primary-light"
              style={{
                width: "100%",
                height: "5px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="rounded-circle  bg-white d-flex justify-content-center align-items-center border-2 border-secondary-5 body-2 "
              style={{ width: "35px", height: "35px", zIndex: 2 }}
            >
              2
            </div>
          </div>
          Order Details
        </div>
      </header>
      {/* main comp */}
      <main>
        <header className="py-2 heading-2 text-primary-light-700 border-bottom-primary">
          Shipping Address
        </header>
        <section className="row mx-0 justify-content-between align-items-start">
          <Form
            layout="vertical"
            style={styles.parent}
            className="col-12 col-md-6 col-xl-7 p-3 mt-3 mb-2 flex-grow-1 me-2 "
          >
            <SelectField
              size={"large"}
              label="Select Shipping Address"
              options={shippingAddresses}
              dataIndex="shippingAddress"
              valueIndex="id"
              placeHolder={"please choose Shipping Address"}
              width="60%"
            />
             <ButtonField
              size="large"
              classnames={"ms-2 mt-3 mb-0"}
              width="25"
              type="success"
            >
              Confirm Order ?.
            </ButtonField>
            <div style={{width:"60%"}} className="ms-2">
              <Divider>Or</Divider>
            </div>
            
            <ButtonField
              size="large"
              classnames={"ms-2 mt-3 mb-2"}
              width="25"
              type="primary"
            >
              Create New Shipping Address
            </ButtonField>
           
          </Form>
          <div
            style={styles.parent}
            className="col-12 col-md-5 col-xl-3 px-2 mt-3 flex-grow-0  overflow-auto rounded py-2"
          >
            {/* @comp */}
            <header
              className="heading-2  text-primary-light-700 text-weight-regular d-flex align-items-center"
              style={{ height: "70px" }}
            >
              Order Summary
            </header>
            <div className="d-flex justify-content-between">
              <p className="text-muted body-1">
                {checkoutState.length} items in cart
              </p>
              <p className="text-muted body-1">Total : Rs {getTotalPrice()}</p>
            </div>
            {checkoutState.map(({ product, quantity }) => (
              <article
                key={product.productId}
                className="d-flex justify-content-between border-top-primary py-2 w-100"
              >
                <div className="d-flex">
                  <span className="me-2">
                    {" "}
                    <img
                      src={product.productCoverUrl}
                      alt=""
                      height={70}
                      width={70}
                      style={{ objectFit: "cover" }}
                      className="bg-primary"
                    />
                  </span>
                  <span>
                    <Text className="  text-decoration-underline">
                      {product.productName}
                    </Text>
                    <p className="body-2   text-weight-regular">
                      Qty : {quantity}
                    </p>
                  </span>
                </div>
                <price>Rs {product.productPrice}</price>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Checkout;

