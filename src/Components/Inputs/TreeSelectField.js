import React from "react";
import { Form, TreeSelect } from "antd";


const TreeSelectField = ({
  treeData = [],
  name = "",
  label = "",
  classname = "",
  width = "",
  handleChange = null,
  rules = [],
  value = "",
  size = "large",
  dataIndex="",
  valueIndex="",
  childrenIndex = ""
}) => {
  return (
    <Form.Item
      name={name}
      label={label} 
      rules={rules}
      className={`m-2 ${classname} `}
      style={{ width: width }}
      initialValue={null}
      
    >
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value ?? ""}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        
        allowClear
        treeDefaultExpandAll
        onChange={handleChange ?? null}
        size={size}
        treeData={treeData}
        fieldNames={{children:childrenIndex,value:valueIndex,label:dataIndex}}
      >
       
      </TreeSelect>
    </Form.Item>
  );
};

export default TreeSelectField;
