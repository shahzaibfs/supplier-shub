import React from 'react'

const ProductImageSection = ({product}) => {
  return (
    <div
    className="col-12 p-0 col-lg-4 flex-grow-1 h-75  me-2"
    style={{ minHeight: "615px" }}
  >
    <img
      src={product.productCoverPictureUrl}
      alt="big pic"
      className="bg-primary-light w-100"
      style={{ minHeight: "500px", minWidth: "100%" ,maxHeight:"500px" ,objectFit:"contain" }}
    />
    <div className="d-flex " style={{ overflowX: "auto" }}>
     {
       product.productPics.map((productPic)=>(
        <img
        key={productPic.productPicId}
        src={productPic.productPictureUrl}
        alt={product.productName}
        className="bg-primary-light my-2 flex-item mx-1"
        style={{ minHeight: "100px", minWidth: "100px" ,objectFit:"contain"}}
        width={"100px"}
      />
       ))
     }
     
    </div>
  </div>
  )
}

export default ProductImageSection