import { Menu } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const menuItems = {
    "about-us" : "1",
    "contact-us"  :"2",
    "customer-service" : "3",
    "order-and-return" : "4",
    "privacy-and-cookie-policy" : "5",
    "search-term" : "6",
}

function SiteInfo() {
    const [current, setCurrent] = useState('');
    const location = useLocation();



    useEffect(() => {
        let pathName = location.pathname.replace("/supplier-hub/", "")
      const timeout =  setTimeout(()=>{setCurrent(menuItems[pathName])},500) 

        return ()=>{
            clearTimeout(timeout)
          }
    })


    const handleClick = (e) => {
        console.log("event : ", e.key)
        setCurrent(e.key)
    }

    return (
        <section className='row vh-100'>
            <Menu

                onClick={handleClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={current}
                mode="inline"
                className='col-2'
            >

                <Menu.Item key="1"><Link to="about-us">About us </Link></Menu.Item>
                <Menu.Item key="2"><Link to="contact-us">Contact us </Link></Menu.Item>
                <Menu.Item key="3"><Link to="customer-service">Customer Service </Link></Menu.Item>
                <Menu.Item key="4"><Link to="order-and-return">Order And Return</Link></Menu.Item>
                <Menu.Item key="5"><Link to="privacy-and-cookie-policy">Privacy And Cookie Policy</Link></Menu.Item>
                <Menu.Item key="6"><Link to="search-term">Search Term</Link></Menu.Item>


            </Menu>
            <Content className='col-9 p-3'>
                <Outlet />
            </Content>

        </section>
    )
}

export default SiteInfo