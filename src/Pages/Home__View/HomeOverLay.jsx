import React from 'react'

/*******************Backgorund Overlay for home    **********************/
const HomeOverLay = () => {
  return (
    
    <div
        className="home-overlay row container-fluid container-xxl  position-absolute no-gutters mx-auto justify-content-md-between h-100  px-0 "
        style={{
          minHeight: "100vh ",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: -1,
        }}
      >
        {[...Array(11)].map((item, idx) => (
          <div
            key={idx}
            className="col-12 my-1 col-xl-1 bg-grid-color mx-xl-1 "
          ></div>
        ))}
      </div>
    
  )
}

export default HomeOverLay