import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <section className="my-3">
    {/* section for tabs */}
   
    <nav
      className="d-flex list-unstyled border-left-primary"
      style={{ height: "44px", marginBottom: "-1px" }}
    >
      <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4 border-right-primary border-top-primary border-bottom-none  bg-white  " style={{cursor:"pointer"}}>
        Details
      </li>
      <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4 border-right-primary border-top-primary border-bottom-none    "  style={{cursor:"pointer"}}>
        More Inforrmation
      </li>

      <li className="h-100 body-1 text-primary-light-700  d-flex align-items-center  px-2 px-md-4 border-right-primary border-top-primary border-bottom-none    "  style={{cursor:"pointer"}}>
        Reviews (3)
      </li>
    </nav>
    <div
      className="border-primary mb-3 bg-white p-4"
      style={{ borderCollapse: "collapse" }}
    >
      <p className="body-2 text-primary-light-700">
       {product.productDetails}
      </p>
      </div>
  </section>
  )
}

export default ProductDetails