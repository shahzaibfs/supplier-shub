import React from 'react'
import { AiOutlineDown, AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import { SectionHeader } from '../Home/HomeHotSellers';

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa",
  },
};

const CategorySideBar = () => {
  return (
    <div className="col-2 d-none d-lg-block me-2 p-0  " style={styles.parent}>
          {/* <h1 className="body-2 text-primary text-center my-0  py-4 border-bottom-primary">
            Shopping Options
          </h1> */}
          <SectionHeader classnames={"border-0 py-1"} justify='start' level={4} title='Shopping options'/>
          <nav className="">
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <AiOutlineDown className="body-2" />
              </li>
              <article className=" text-primary py-2 list-unstyled d-none">
                {/* actions here */}
                <li className="body-2 text-primary">Something</li>
                <li className="body-2 text-primary">Something</li>
              </article>
            </div>
          </nav>
          <div className="my-1">
          <SectionHeader classnames={"border-0 py-1"} justify='start' level={4} title='Wishlist'/>

            <div
              className="border-bottom-primary px-2 "
              style={{ height: "max-content" }}
            >
              <li className="d-flex justify-content-between align-items-center body-2 py-2">
                CategoryBy
                <div>
                  <AiOutlinePlusSquare className="body-1 me-2" />
                  <AiOutlineMinusSquare className="body-1" />
                </div>
              </li>
            </div>
          </div>
        </div>
  )
}

export default CategorySideBar