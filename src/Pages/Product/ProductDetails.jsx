import React from "react";

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
  borderSpecial: {
    border: "1px solid #d8dee4",
  },
};

const ProductDetails = ({ product }) => {
  return (
    <section className="my-3">
      {/* section for tabs */}

      <nav
        className="d-flex list-unstyled "
        style={{
          height: "44px",
          width: "max-content",
          marginBottom: "4px",
          ...styles.borderSpecial,
        }}
      >
        <li
          className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4    "
          style={{ cursor: "pointer", ...styles.parent }}
        >
          Details
        </li>
        <li
          className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4     "
          style={{ cursor: "pointer" }}
        >
          More Inforrmation
        </li>

        <li
          className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4 "
          style={{ cursor: "pointer" }}
        >
          Reviews (3)
        </li>
      </nav>
      <div
        className=" mb-3  p-4"
        style={{ borderCollapse: "collapse", ...styles.parent }}
      >
        <p className="body-2 text-primary-light-700">
          {product.productDetails}
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
