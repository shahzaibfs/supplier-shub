import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

import backgroundImage from "../../Assets/images/fyp.jpg";
import ButtonField from "../../Components/Inputs/button-field";
import {MdTouchApp} from 'react-icons/md'

const { Text, Title } = Typography;

const HomeBanner = ({
  title = "Buy The Items in Whole Sale rate directly from Suppliers ",
  btn = { link: "/cart", text: "Go to Shopping Cart" },
}) => {
  const navigate = useNavigate();
  const backgroundImageUrl = backgroundImage;

  return (
    <section
      className="container-fluid  mt-4"
      style={{
        height: "400px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      <div className="position-relative w-100 h-100">
        <div
          className="banner__info  position-absolute p-4 d-flex flex-column justify-content-center "
          style={styles.parent}
        >
          <Text>Welcome ~</Text>
          <Title className="my-2" level={3}>
            {" "}
            {title}
          </Title>

          <ButtonField
            onClick={() => {
              navigate(btn.link);
            }}
            icon={<MdTouchApp className="me-2"  size={20}/>}
            classnames={"my-2 ms-0"}
            circle
            type="success"
            size="large"
          >
            {btn.text}
          </ButtonField>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

const styles = {
  parent: {
    borderRadius: "7px",
    border: "1px solid #d8dee4",
    background: "#f6f8fa8a",
  },
};
