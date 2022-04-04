import React from "react";

function PageHeader({heading,subtitle}) {
  return (
    <div className=" pageHeader">
      <h1 className="heading-2 text-primary mb-1">{heading && heading}</h1>
      <p className="body-2">{subtitle&& subtitle}</p>
    </div>
  );
}

export default PageHeader;
