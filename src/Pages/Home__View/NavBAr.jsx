import { Col, Layout, Row } from "antd";
import React from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBAr = () => {
  // const getClearLink = (name) => {
  //   return name.split(" ").join("-");
  // };
  const navigate = useNavigate();

  return (
    <Layout className="bg-primary-light" style={{ height: 45 }}>
      <Row className="container-xxl mx-auto h-100 text-white" align="middle">
        {navbarData.map((eachcateg) => (
          <Col
            key={eachcateg.id}
            className="position-relative navbar__Link__main h-100  me-3"
          >
            <li
              className="list-unstyled "
              onClick={() =>
                !eachcateg.children && navigate("/products/"+eachcateg.name)
              }
            >
              {eachcateg.name} {eachcateg.children && <AiFillCaretDown />}
            </li>
            {eachcateg.children !== null && (
              <PrintCategChildren categ={eachcateg.children} />
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
      className="position-absolute bg-white text-primary navbar__Link__child_parent"
      style={{
        zIndex: 22,
        minWidth: 200,
        width: "max-content",
        top: 45,
        left: 0,
      }}
    >
      {categ.map((eachCategory) => (
        <div
          key={eachCategory.id}
          className="list-unstyled p-2 px-3 navbar__Link__child_parent_links"
          onClick={() =>
            !eachCategory.children && navigate("/products/"+eachCategory.name)}
        >
          {eachCategory.name}
          {eachCategory.children && <AiFillCaretRight className="ms-2" />}
          {eachCategory.children && (
            <ChildNode subCateg={eachCategory.children} />
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
          key={eachSubCateg.id}
          className="navbar__Link__child_children_links m-0 p-2 px-3"
          onClick={() =>
            !eachSubCateg.children && navigate("/products/"+eachSubCateg.name)}
        >
          {eachSubCateg.name}{" "}
          {eachSubCateg.children && <AiFillCaretRight className="ms-2" />}
          {eachSubCateg.children && (
            <ChildNode subCateg={eachSubCateg.children} />
          )}
        </div>
      ))}
    </div>
  );
};

const navbarData = [
  {
    id: 1,
    name: "baverages",
    coverPhoto: "something.com",
    parentId: null,
    children: [
      {
        id: 2,
        name: "Water",
        coverPhoto: "something.com",
        parentId: 1,
        children: null,
      },
      {
        id: 3,
        name: "Milk",
        coverPhoto: "something.com",
        parentId: 1,
        children: null,
      },
      {
        id: 4,
        name: "Tea && Coffee",
        coverPhoto: "something.com",
        parentId: 1,
        children: [
          {
            id: 5,
            name: "cafiene",
            coverPhoto: "something.com",
            parentId: 4,
            children: null,
          },
          {
            id: 6,
            name: "tea",
            coverPhoto: "something.com",
            parentId: 4,
            children: [
              {
                id: 7,
                name: "tapal",
                coverPhoto: "something.com",
                parentId: 6,
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "snacks",
    coverPhoto: "something.com",
    parentId: null,
    children: [
      {
        id: 22323,
        name: "Water",
        coverPhoto: "something.com",
        parentId: 2,
        children: null,
      },
      {
        id: 2323234,
        name: "Milk",
        coverPhoto: "something.com",
        parentId: 2,
        children: null,
      },
      {
        id: 2323,
        name: "Tea && Coffee",
        coverPhoto: "something.com",
        parentId: 2,
        children: [
          {
            id: 23223232323232,
            name: "cafiene",
            coverPhoto: "something.com",
            parentId: 2323,
            children: null,
          },
          {
            id: 232322323233326,
            name: "tea",
            coverPhoto: "something.com",
            parentId: 2323,
            children: [
              {
                id: 72232323,
                name: "tapal",
                coverPhoto: "something.com",
                parentId: 232323326,
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "snacks",
    coverPhoto: "something.com",
    parentId: null,
    children: null,
  },
];
