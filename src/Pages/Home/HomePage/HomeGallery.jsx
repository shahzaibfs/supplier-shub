import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import productCategoryMockData from "../productCategoryMockData.json";

const HomeGallery = () => {
  const getProductCategoryUrl = (productCategory) => {
    return productCategory.categoryName.split(" ").join("-");
  };

  return (
    <div className="container-fluid container-xxl mx-auto p-0 mt-4 W-100">
      <div className="home__gallery">
        <div
          className="bg-primary-light p-4"
          style={{
            background: `linear-gradient(0deg, rgba(1, 0, 1, 0.3), rgba(1, 0, 1, 0.3)) ,url(${productCategoryMockData[0].coverPhoto})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="d-flex flex-column align-items-start p-4">
            <h1 className="heading-2 text-white text-weight-bold">
              {productCategoryMockData[0].categoryName}
            </h1>
            <p className="body-1 text-white text-weight-regular">
             Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ex fuga delectus quidem quos
              quibusdam minus, laboriosam in sunt ab nihil necessitatibus
              maiores assumenda temporibus accusantium ipsa repellat ratione
              nobis facere?
            </p>
            <Link
              to={`/products/${getProductCategoryUrl(
                productCategoryMockData[0]
              )}`}
            >
              {" "}
              <p className="body-2 text-white text-weight-regular text-decoration-underline">
                Shop  {productCategoryMockData[0].categoryName}  <AiOutlineCaretRight className="ms-1" />
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-primary-light p-4"
        style={{
          background: `linear-gradient(0deg, rgba(1, 0, 1, 0.3), rgba(1, 0, 1, 0.3)) ,url(${productCategoryMockData[1].coverPhoto})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
        >
          <div className="d-flex flex-column align-items-start w-50  ms-auto p-4">
            <h1 className="heading-2 text-white text-weight-regular ">
             {productCategoryMockData[1].categoryName}
            </h1>
            <p className="body-1 text-white text-weight-regular">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, consequuntur dignissimos. Modi molestias voluptas exercitationem porro illo, quas esse, quibusdam a provident dignissimos fugiat doloribus consequuntur voluptatem error molestiae magni?
            </p>
            <Link to={`/products/${getProductCategoryUrl(productCategoryMockData[1])}`}><p className="body-2 text-white text-weight-regular text-decoration-underline">
              Shop  {productCategoryMockData[1].categoryName}  <AiOutlineCaretRight className="ms-1" />
            </p></Link>
          </div>
        </div>
        <div className="bg-primary-light p-4"
         style={{
          background: `linear-gradient(0deg, rgba(1, 0, 1, 0.3), rgba(1, 0, 1, 0.3)) ,url(${productCategoryMockData[2].coverPhoto})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
        >
          <div className="d-flex flex-column align-items-start w-75 ms-auto p-4">
            <h1 className="heading-2 text-white text-weight-regular">
             {productCategoryMockData[2].categoryName}
            </h1>
            <p className="body-1 text-white text-weight-regular">
             Lorem ipsum dolor, 
            </p>
           <Link to={`/products/${getProductCategoryUrl(productCategoryMockData[2])}`}> <p className="body-2 text-white text-weight-regular text-decoration-underline">
              Shop {productCategoryMockData[2].categoryName} <AiOutlineCaretRight className="ms-1" />
            </p></Link>
          </div>
        </div>
        <div className="bg-primary-light p-4"
         style={{
          background: `linear-gradient(0deg, rgba(1, 0, 1, 0.3), rgba(1, 0, 1, 0.3)) ,url(${productCategoryMockData[3].coverPhoto})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundRepeat:"no-repeat"
        }}
        >
          <div className="d-flex flex-column align-items-start h-100 justify-content-center w-75 ms-auto p-4 bg-primary-light-700">
            <h1 className="heading-2 text-primary-light-700 text-weight-regular">
             {productCategoryMockData[3].categoryName}
            </h1>
            <p className="body-1 text-muted text-weight-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptates!
            </p>
          <Link to={`/products/${getProductCategoryUrl(productCategoryMockData[3])}`}>  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
              Shop {productCategoryMockData[3].categoryName} <AiOutlineCaretRight className="ms-1" />
            </p></Link>
          </div>
        </div>
        <div className="bg-primary-light p-4"
         style={{
          background: `linear-gradient(0deg, rgba(1, 0, 1, 0.3), rgba(1, 0, 1, 0.3)) ,url(${productCategoryMockData[4].coverPhoto})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundRepeat:"no-repeat"
        }}
        >
          <div className="d-flex flex-column align-items-start w-100 ms-auto p-4 bg-primary-light-700">
            <h1 className="heading-2 text-primary-light-700 text-weight-regular">
             {productCategoryMockData[4].categoryName}
            </h1>
            <p className="body-1 text-muted text-weight-regular">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti quaerat perferendis!
            </p>
            <Link to={`/products/${productCategoryMockData[4]}`} ><p className="body-2 text-primary text-weight-regular text-decoration-underline">
              Shop  {productCategoryMockData[4].categoryName} <AiOutlineCaretRight className="ms-1" />
            </p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
