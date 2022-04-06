import { Typography } from "antd"

import ButtonField from "./button-field"


const {Text,Title} =Typography


function StyledButton({
    Icon=null,
    type="ghost",
    classnames="text-start",
    subtitle="",
    title="",
    iconSize=16

}) {
  return (
    <ButtonField
    classnames={classnames}
    icon={Icon &&<Icon color="inherit" className="me-1" style={{fontSize:iconSize}}/>}
    width="100"
    height={"100"}
    type={type}
  >
    <div className="d-flex flex-column">
      <Text  className="m-0 lh-2" style={{ color: "inherit" ,opacity:"0.8" }}>
        {" "}
       {subtitle}
      </Text>
      <Title level={5} strong className="m-0 lh-1" style={{ color: "inherit" }}>
        {" "}
        {title}
      </Title>
    </div>
  </ButtonField>
  )
}

export default StyledButton