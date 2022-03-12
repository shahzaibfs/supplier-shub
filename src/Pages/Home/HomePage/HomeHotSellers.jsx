import React, {  useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../../../Components/Popup/Popup";

const HomeHotSellers = () => {
  const [isPopupShow, setisPopupShow] = useState(false);

  const products = useSelector((store) => store.productReducer);
  const authReducer = useSelector((store) => store.authReducer);

  const dispatch = useDispatch();

  

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="container-fluid container-xxl">
      {/* Section header  */}
      <header className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
        <h1 className="heading-2 text-primary text-weight-regular">
          Hot Sellers
        </h1>
        <p className="body-2 text-primary-light-800">
          Here is what`s trending on Luma right now
        </p>
      </header>

      <main className="row mx-0 justify-content-center justify-content-sm-between  flex-wrap px-0">
        {products.map((product) => (
          <div
            className="col-11 col-sm-5  col-md-3  col-xl-2  mx-0 mx-md-2 my-2  mx-xxl-2  px-0"
            style={{ minHeight: "400px" }}
            key={product.productId}
          >
            {/* img */}
            <Link
              to={`/products/${product.category.categoryName}/${product.productId}`}
            >
              <img
                className="h-50  bg-primary"
                style={{ objectFit: "cover" }}
                width="200px"
                src={product.productCoverPictureUrl}
                alt={product.productName}
              />
            </Link>
            {/* section for card data */}
            <article className="my-3 px-2" >
              <Link
                to={`/products/${product.category.categoryName}/${product.productId}`}
              >
                <p className="body-2 text-primary-light-700 text-decoration-underline">
                  {product.companyName}
                </p>
              </Link>
              <div className="text-weight-bold body-2">
                Rs {product.productPrice}| {product.productWeight}
              </div>
            </article>
            {/* actions  */}
            <div className="position-relative px-2">
              <div className="d-flex">
                {[...Array(product.customerRating)].map((_, index) => (
                  <div className="stars " key={index}>
                    <AiOutlineStar />
                  </div>
                ))}
              </div>
              <p className="mb-2 text-muted text-decoration-underline">
                Reviews
              </p>
              {
                authReducer.userDetails.accountType !== "SUPPLIER" ?
              <button
                onClick={() => {
                  handleAddToCart(product);
                  setisPopupShow(true);
                  setTimeout(()=>{
                    setisPopupShow(false)
                  },500)
                }}
                className="btn bg-primary my-0 text-white"
              >
                Add to cart
              </button> :null
              }
            </div>
          </div>
        ))}
      </main>
      <Popup isShow={isPopupShow} message={"Product Added to Cart"}/>
    </div>
  );
};

export default HomeHotSellers;
