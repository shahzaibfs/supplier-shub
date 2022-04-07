import { Form, Input } from "antd"


function PhoneField({
    name,
    label,
    rules=[],
    addonBefore=<></>,
    width,
    size,
    placeHolder
}) {
  return (
    <Form.Item
    className="m-2"
    name={name}
    label={label}
    rules={rules}
    style={{ width: width }} 
    
  >
    <Input size={size} placeholder={placeHolder} addonBefore={addonBefore} />
  </Form.Item>  )
}

export default PhoneField