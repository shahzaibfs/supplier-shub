import { Card, Typography } from "antd";
import React, { useState } from "react";
import SupplierProfileDrawer from "../../Components/Drawers/SupplierProfileDrawer";
import SupplierImage from "./supplier-image.png"

const { Title, Text } = Typography;

function CompanyCard({ photo, title, subtitle, companyLogo ,supplier}) {
  const [isVisible,setisVisible] = useState(false);

  const openSupplierDrawer = (evt)=>{
    setisVisible(true)
  }
  return (
    <div>
      <Card
      onClick={openSupplierDrawer}
        hoverable
        style={{
          width: 188,
          maxWidth: 188,
          minHeight: 270,
          position: "relative",
        }}
        className="mx-1"
        cover={
          <img
            alt="example"
            width={"100%"}
            className="mb-1"
            src={SupplierImage}
            height={188}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        }
      >
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(29,27,59,0) 0%, rgba(2,0,36,0.12648809523809523) 37%, rgba(255,255,255,0.8995973389355743) 60%, rgba(255,255,255,1) 100%)",
          }}
        >
          <img
            loading="lazy"
            width={52}
            height={52}
            src={companyLogo}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center",

              border: "1px solid ",
              padding: "3px",
              background: "white",
              boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
            }}
          />
        </div>

        <div className="text-center">
          <Title level={5} className="mb-0">
            {title}
          </Title>
          <Text type="secondary">{subtitle}</Text>
        </div>
      </Card>
      <SupplierProfileDrawer
        setIsVisible={setisVisible}
        visible={isVisible}
        supplierId={supplier.supplierId}
      />
    
    </div>
  );
}

export default CompanyCard;
