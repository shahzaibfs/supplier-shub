import React from 'react'

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const ProductImageSection = ({product}) => {
  return (
    <div
    className="col-12 p-0 col-lg-4 flex-grow-1 h-75  me-2 px-3"
    style={{ minHeight: "600px" ,...styles.parent}}
  >
    <img
      src={product.productCoverPictureUrl}
      alt="big pic"
      className=" w-100 my-3"
      style={{ minHeight: "500px", minWidth: "100%" ,maxHeight:"500px" ,objectFit:"cover" }}
    />
    <div className="d-flex mb-3 align-items-center " style={{ overflowX: "auto" ,...styles.parent}}>
     {
       product.productPics.map((productPic)=>(
        <img
        key={productPic.productPicId}
        src={productPic.productPictureUrl}
        alt={product.productName}
        className=" my-2 flex-item mx-1 p-1 bg-white"
        style={{ minHeight: "70px", minWidth: "70px" ,objectFit:"contain",border:"1px solid "}}
        width={"100px"}
      />
       ))
     }
     
    </div>
  </div>
  )
}

export default ProductImageSection