import { Button, Typography } from "antd";
const { Text } = Typography;

function ButtonField({
  icon = null,
  type = "primary",
  htmlType = "",
  size = "middle",
  width = "50",
  circle = false,
  children,
  loading,
}) {
  return (
    <Button
      icon={icon ?? null}
      className={`w-${width} d-flex justify-content-center text-white align-items-center mx-auto `}
      htmlType={htmlType}
      size={size}
      style={{
        background:getBtnBackgroundColor[type],
        borderRadius: circle && "7px",
        boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      loading={loading}
    >
      <Text strong style={{ color: "inherit" }}>
        {children}
      </Text>
    </Button>
  );
}

export default ButtonField;


const getBtnBackgroundColor = {
  success:"#2da44e",
  danger:"#d9534f"
}
