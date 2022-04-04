import React from 'react'
import reactDom from 'react-dom';
import {TiTick} from "react-icons/ti"

const modalElem  = document.getElementById("popup");
modalElem.classList.add("position-fixed")
modalElem.style.top="20px"
modalElem.style.left="20px"

const Popup =({isShow ,message,color})=> {
    if (!isShow) return null;
    return reactDom.createPortal(
       <div className={`popup text-white d-flex justify-content-center  align-items-center  p-2 px-4 position-absolute ${color ? "bg-danger" : null} bg-success`} style={{height :"max-content" ,width:"max-content" ,borderRadius:"5px"}}>
        <p className="heading-3 my-0">{message}</p>
        <TiTick className="ms-3 heading-3" />
       </div>
      ,modalElem);
    }

export default Popup