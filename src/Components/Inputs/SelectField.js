import React from 'react'
import { Select } from 'antd'

const { Option } = Select;



function SelectField({ options = [], handleChange, label, width }) {
    return (
        <div style={{ width: width }} className="m-2">
            <label>{label}</label>
            <br></br>
            <Select className='w-100' defaultValue={!options.length ? "select" : options[0].name} style={{ width: 120 }} onChange={handleChange}>
                {options.length && options.map((option, index) => (
                    <Option key={index} value={option.value}>{option.name}</Option>)
                )}
            </Select>
        </div>
    )
}

export default SelectField