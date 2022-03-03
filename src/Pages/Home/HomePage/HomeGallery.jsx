import React from 'react'
import {AiOutlineCaretRight } from "react-icons/ai"

const HomeGallery = () => {
  return (
    <div className="container-fluid container-xxl mx-auto p-0 mt-4 W-100">
            <div className="home__gallery">
              <div className="bg-primary-light p-4">
                <div className="d-flex flex-column align-items-start p-4">
                  <h1 className="heading-2 text-primary text-weight-bold">
                    20% OFF
                  </h1>
                  <p className="body-1 text-muted text-weight-regular">
                    Luma pants when you shop today*
                  </p>
                  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                    Shop Pants <AiOutlineCaretRight className="ms-1" />
                  </p>
                </div>
              </div>
              <div className="bg-primary-light p-4">
                <div className="d-flex flex-column align-items-start w-50  ms-auto p-4">
                  <h1 className="heading-2 text-primary-light-700 text-weight-regular ">
                    Even more ways to mix and match
                  </h1>
                  <p className="body-1 text-muted text-weight-regular">
                    Buy 3 Luma tees get a 4th free
                  </p>
                  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                    Shop teees <AiOutlineCaretRight className="ms-1" />
                  </p>
                </div>
              </div>
              <div className="bg-primary-light p-4">
                <div className="d-flex flex-column align-items-start w-75 ms-auto p-4">
                  <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                    Take it from Erin
                  </h1>
                  <p className="body-1 text-muted text-weight-regular">
                    Luma founder Erin Renny shares her favorites!
                  </p>
                  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                    Shop Erin Recommends{" "}
                    <AiOutlineCaretRight className="ms-1" />
                  </p>
                </div>
              </div>
              <div className="bg-primary-light p-4">
                <div className="d-flex flex-column align-items-start h-100 justify-content-center w-75 ms-auto p-4 bg-primary-light-700">
                  <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                    Twice around, twice as nice
                  </h1>
                  <p className="body-1 text-muted text-weight-regular">
                    Find conscientious, comfy clothing in our eco-friendly
                    collection{" "}
                  </p>
                  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                    Shop Eco-Friendly <AiOutlineCaretRight className="ms-1" />
                  </p>
                </div>
              </div>
              <div className="bg-primary-light p-4">
                <div className="d-flex flex-column align-items-start w-100 ms-auto p-4 bg-primary-light-700">
                  <h1 className="heading-2 text-primary-light-700 text-weight-regular">
                    Science meets performance
                  </h1>
                  <p className="body-1 text-muted text-weight-regular">
                    Wicking to raingear, Luma covers you
                  </p>
                  <p className="body-2 text-primary text-weight-regular text-decoration-underline">
                    Shop Performance <AiOutlineCaretRight className="ms-1" />
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default HomeGallery