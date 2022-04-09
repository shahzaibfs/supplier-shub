import { Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

function PageHeader({ heading = "", subtitle = "",classname ,level=2}) {
  return (
    <div className={` pageHeader bg-white p-3 ${classname}`} style={{borderRadius:7,border:"1px solid rgb(216, 222, 228)"}}>
      <Title level={level} className="mb-1">{heading}</Title>
      <Text>{subtitle}</Text>
    </div>
  );
}

export default PageHeader;
