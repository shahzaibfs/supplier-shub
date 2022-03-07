import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const CategoryMain = ({CategoryProducts}) => {
    console.log(CategoryProducts)
  return (
    <section className="col ">
          {/* content header */}
          <header className="py-3 px-1 d-flex justify-content-between my-2">
            <p className="text-muted body-2">Items 1-9 of 32</p>
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
               

               {
                   CategoryProducts.length ? 
                    CategoryProducts.map(product=>(
                        <div key={product.productId} className="col my-2 mx-2 p-0 " style={{height:"340px" ,minWidth:"250px" ,maxWidth:"250px" }}>
                        {/* img */}
                        <div className="h-75 w-100 p-0 bg-primary-light mx-0">
                        <img width={"100%"} height="100%" style={{objectFit:"cover"}} src={product.productCoverPictureUrl} alt={product.productName}/>
                        </div>
                        {/* info */}
                        <div className="px-2">
                            <h1 className="body-2 text-primary text-decoration-underline text-muted py-2 my-0">{product.productName}</h1>
                            {/* reviews */}
                            <div>
                                {[...Array(product.customerRating)].map((_,index)=>(
                                    <AiOutlineStar  key={index}/>
                                ))}
                            </div>
                            {/* price */}
                            <div className="text-primary text-weight-bold body-2">Rs {product.productPrice} per <span className="body-2 bd-highlight">{product.productWeight}</span></div>
                        </div>
                    </div>
                    ))
               : "no products have been added to this category "
               }
                

            </div>
        </section>
  )
}

export default CategoryMain