import { Button, Image, Typography } from "antd";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const { Paragraph, Title } = Typography;

const CategoryMain = ({ CategoryProducts, productCategory, data }) => {
  return (
    <section className="col ">
      {/* content header */}
      <header className="py-3 px-1 d-flex justify-content-between my-2">
        <p className="text-muted body-2">
          Items {data.numberOfElements} out of {data.pageable.pageNumber}
        </p>
        <div>
          sort by
          <select className="p-1 ms-2 body-2">
            <option>Price</option>
            <option>Company Name</option>
            <option>Reviews</option>
          </select>
        </div>
      </header>
      {/* content  */}
      <div className="row flex-wrap justify-content-evenly ">
        {CategoryProducts.length
          ? CategoryProducts.map((product) => (
              <div
                key={product.productId}
                className="col my-2 mx-2 p-0"
                style={{
                  height: "300px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  maxWidth: "150px",
                  boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                }}
              >
                {/* img */}
                <Link
                  to={`/product/${product.productId}`}
                  className=" d-flex flex-column justify-content-between h-100"
                  style={styles.parent}
              
                >
                  <div className="h-50 w-100 p-0 bg-primary-light mx-0">
                    <Image
                      width={"100%"}
                      height="100%"
                      style={{ objectFit: "cover" }}
                      src={product.productCoverUrl}
                      alt={product.productName}
                    />
                  </div>
                  {/* info */}
                  <div className="px-2">
                    <Title level={4} underline>
                      {product.productName}
                    </Title>
                    {/* reviews */}
                    <div>
                      {[...Array(product.customerRating)].map((_, index) => (
                        <AiOutlineStar key={index} />
                      ))}
                    </div>
                    {/* price */}
                    <Paragraph>
                      Rs {product.productPrice} per{" "}
                      <span className="body-2 bd-highlight">
                        {product.productWeight}
                      </span>
                    </Paragraph>
                  </div>{" "}
                  <Button>View More Details</Button>
                </Link>
              </div>
            ))
          : "no products have been added to this category "}
      </div>
    </section>
  );
};

export default CategoryMain;

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};
