
import React from 'react'
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



function PasswordField({label,placeHolder,width}) {
  return (
    <div className='m-2' style={{width:width}}>
        {label && <><label>{label}</label> <br /></>}
    <Input.Password
    width={"100%"}
      placeholder={placeHolder}
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    autoSave={false}
    autoComplete={false}
    
    />
  </div>
  )
}

export default PasswordField