import { Button } from "antd";
import "./input.css"


function ButtonField({
  icon = null,
  type = "primary",
  htmlType = "",
  size = "middle",
  width = "50",
  circle = false,
  children,
  loading,
  height,
  classnames
}) {
  return (
    <Button

      icon={icon ?? null}
      className={`w-${width} h-${height} ${classnames} btn-custom d-flex justify-content-center align-items-center mx-auto `}
      htmlType={htmlType}
      size={size}
      style={{
        ...getBtnBackgroundColor[type],
        borderRadius: circle && "7px",
        boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      loading={loading}
    >
      
        {children}

    </Button>
  );
}

export default ButtonField;


const getBtnBackgroundColor = {
  success: {background:"#2da44e",color:"white"},
  danger:{background:"#d9534f",color:"white"},
  ghost: {background:"transparent", color: "white"}
}
