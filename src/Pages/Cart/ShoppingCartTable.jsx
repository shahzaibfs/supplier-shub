import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ShoppingCartTable = ({ products ,setProductsDetailsRef}) => {
  const [quantities,setquantities] = useState(null);
  const [prices,setPrices] =useState(null);
  const dispatch = useDispatch();

  useEffect(
    () => {
   
      setProductsDetailsRef({quantities,prices})
    
  
    
  }, [quantities,prices])
  

  const handleOnLoad=(productId,minimumOrder,productPrice)=>{
    setquantities(old=>({
      ...old,
      [productId]: minimumOrder*1
    }))
    
      setPrices(old=>({
        ...old,
        [productId]: productPrice*minimumOrder
      }))
     
     
 
  }

  const handleQuantityChange=(e,product)=>{
      setquantities(old=>({
        ...old,
        [e.target.name]:e.target.value*1
      }))
      if(e.target.value <quantities[product.productId]){
        setPrices(old=>({
          ...old,
           [e.target.name]: prices[e.target.name]-product.productPrice
        }))
      }else{
        setPrices(old=>({
          ...old,
           [e.target.name]: prices[e.target.name]+product.productPrice
        }))
      }
     

  }


  const handleDeleteProduct = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId
      },
    });
  };

 
  
  return (
    <section
      className="col px-0 bg-primary-light-700 me-1 "
      style={{ overflowX: "auto" }}
    >
      <table width="100%" className=" h-50 ">
        <thead className="border-bottom-primary" style={{ height: "50px" }}>
          <tr>
            <th width="60%" className="ps-4 body-1 text-primary-light-700">
              Item
            </th>
            <th className="body-1 text-primary-light-700 px-2">Price</th>
            <th className="body-1 text-primary-light-700 px-2" width="15%">
              Quantity
            </th>
            <th className="body-1 text-primary-light-700 px-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {[...products].reverse().map((product, index) => (
            <tr
            key={product.productId}
              onLoad={()=>handleOnLoad(product.productId,product.minimumOrder,product.productPrice)}
              className={`position-relative ${
                products.length - 1 === index ? "" : "border-bottom-primary"
              }`}
            >
              <td className="py-3 ps-4">
                <div className="d-flex">
                  <div>
                    <img
                      src={product.productCoverPictureUrl}
                      width="150px"
                      height="150px"
                      className="bg-primary"
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                    <p className="text-muted my-2 text-decoration-underline">
                      Add to wishlist
                    </p>
                  </div>

                  <div className="flex-item ms-4">
                    <h1 className="body-1 text-primary-light-700  text-decoration-underline">
                      {product.productName}
                    </h1>
                    <div>
                      <span className="body-2 text-weight-bold ext-primary-light-700">
                        company
                      </span>
                      <span className="body-2 text-primary-light-700">
                        : {product.companyName}
                      </span>
                    </div>
                    <div>
                      <span className="body-2 text-weight-bold ext-primary-light-700">
                        Email
                      </span>
                      <span className="body-2 text-primary-light-700">
                        : loremIpsum231@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-3 body-1 text-primary-light-700 d-block">
                {product.productPrice}Rs
              </td>
              <td className="px-2 position-relative">
                {" "}
                <input
                  type={"number"}
                  className=" form-control  text-primary body-2 position-absolute mt-3"
                  min={product.minimumOrder}
                  style={{ width: "70px", top: 0 }}
                  name={product.productId}
                  onChange={(e)=>handleQuantityChange(e,product)}
                  placeholder={product.minimumOrder}
                />
              </td>
              <td className="ps-4 position-relative py-3 body-1 d-block text-primary-light-700 h-100">
                {prices !==null ? prices[product.productId] : "loading"}Rs
                <div
                  className=" py-1 position-absolute d-block text-primary-light-700 mb-4 ms-3 "
                  style={{ bottom: 0, cursor: "pointer" }}
                >
                  <AiFillDelete
                    onClick={() => handleDeleteProduct(product.productId)}
                    style={{ fontSize: "1.5rem" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShoppingCartTable;
