import React from "react";
import { Form, TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

const TreeSelectField = ({
  treeData = [
    {
      title: "Node1",
      value: "0-0",
      key: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-0",
          key: "0-0-0",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: "0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ],
  name = "",
  label = "",
  classname = "",
  width = "",
  handleChange = null,
  rules = [],
  value = "",
  size = "large",
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className={`m-2 ${classname} `}
      style={{ width: width }}
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
      >
        {treeData.map((parentNode, idx) => {
          return (
            <TreeNode value={parentNode.title} title={parentNode.title}>
                {parentNode.children.length &&  parentNode.children.map(children=>(
                     <TreeNode value={children.title} title={children.title} />
                )) }
            </TreeNode>)
        })}
      </TreeSelect>
    </Form.Item>
  );
};

export default TreeSelectField;
