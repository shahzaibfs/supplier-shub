import { Col, Layout, Row } from "antd";
import React, { useEffect } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCategories } from "../../hooks/useGetCategories";
import doGetCategoriesFromDatabase from "../../services/category-service";

const NavBAr = () => {
  const categoriesFromRedux = useGetCategories();
  const dispatch = useDispatch();
  console.log(categoriesFromRedux)

  let categories = [...categoriesFromRedux].slice(0, 9);
  useEffect(() => {
    if (categories.length > 0) return;
    
    dispatch(doGetCategoriesFromDatabase());
  }, [dispatch, categories]);

  const navigate = useNavigate();
 

  return (
    <Layout className="bg-primary-light" style={{ height: 45 }}>
      <Row className="container-xxl mx-auto h-100 text-white" align="middle">
        {categories.length > 0 &&
          categories.map((eachcateg) => (
            <Col
              key={eachcateg.categoryId}
              className="position-relative navbar__Link__main h-100  me-3"
            >
              <li
                className="list-unstyled "
                onClick={() =>
                  eachcateg.categories.length <= 0 &&
                  navigate("/products/" + eachcateg.categoryName)
                }
              >
                {eachcateg.categoryName}{" "}
                {eachcateg.categories.length > 0 && <AiFillCaretDown />}
              </li>
              {eachcateg.categories.length > 0 && (
                <PrintCategChildren categ={eachcateg.categories} />
              )}
            </Col>
          ))}
      </Row>
    </Layout>
  );
};

export default NavBAr;

const PrintCategChildren = ({ categ }) => {
  const navigate = useNavigate();
  return (
    <div
      className="position-absolute  bg-white text-primary navbar__Link__child_parent"
      style={{
        zIndex: 22,
        minWidth: 200,
        width: "max-content",
        top: 45,
        left: 0,
        boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
      }}
    >
      {categ.map((eachCategory) => (
        <div
          key={eachCategory.categoryId}
          className="list-unstyled p-2 px-3 navbar__Link__child_parent_links"
          onClick={() =>
            eachCategory.categories.length <= 0 &&
            navigate("/products/" + eachCategory.categoryName)
          }
        >
          {eachCategory.categoryName}
          {eachCategory.categories.length > 0 && (
            <AiFillCaretRight className="ms-2" />
          )}
          {eachCategory.categories.length > 0 && (
            <ChildNode subCateg={eachCategory.categories} />
          )}
        </div>
      ))}
    </div>
  );
};

const ChildNode = ({ subCateg }) => {
  const navigate = useNavigate();
  return (
    <div
      className="position-absolute h-100  bg-white navbar__Link__child_children"
      style={{
        minWidth: 200,
        top: 0,
        right: -200,
        boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
        width: "max-content",
      }}
    >
      {subCateg.map((eachSubCateg) => (
        <div
          key={eachSubCateg.categoryId}
          className="navbar__Link__child_children_links m-0 p-2 px-3"
          onClick={() =>
            eachSubCateg.categories.length <= 0 &&
            navigate("/products/" + eachSubCateg.categoryName)
          }
        >
          {eachSubCateg.categoryName}{" "}
          {eachSubCateg.categories.length > 0 && (
            <AiFillCaretRight className="ms-2" />
          )}
          {eachSubCateg.categories.length > 0 && (
            <ChildNode subCateg={eachSubCateg.categories} />
          )}
        </div>
      ))}
    </div>
  );
};

