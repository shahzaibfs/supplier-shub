import { Button ,Typography } from "antd";
const {Text} = Typography

function ButtonField({
  icon = null,
  type = "primary",
  htmlType = "",
  size = "middle",
  width = "50",
  circle = false,
  children,
  loading
}) {
  return (
    <Button
      icon={icon ?? null}
      type={type}
      className={`w-${width} d-flex justify-content-center text-white align-items-center mx-auto btn-bg-${type}`}
      htmlType={htmlType}
      size={size}
      style={{ borderRadius: circle && "100px",boxShadow:" 0px 2px 8px rgba(0, 0, 0, 0.1)"}}
      loading={loading}
    >
      <Text style={{color:"inherit"}}>{children}</Text>
    </Button>
  );
}

export default ButtonField;
