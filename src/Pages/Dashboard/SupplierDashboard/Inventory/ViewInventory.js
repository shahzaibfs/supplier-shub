import { MdAdd, MdArrowDropDownCircle } from "react-icons/md";
import {AiFillDelete} from "react-icons/ai"
import {FiEdit} from "react-icons/fi"
import { useState } from "react";

const ViewInventory = () => {
const [isDrop,setisDrop] =useState(undefined)

  function getIsDropKeys(objIsDrop){
    if(objIsDrop === undefined){
      return []
    }else{
      return Object.keys(objIsDrop);

    }
  }

  const handleDropClick=(id)=>{
    setisDrop(old=>({
      ...old,
      [id] : getIsDropKeys(isDrop).filter(key=> id===key*1).length ? !isDrop[id] :true  
    }))
  }

  const getIsDrop =(id)=>{
       if(getIsDropKeys(isDrop).filter(key=>id===key*1).length){
          return isDrop[id];
       }else{
         return false
       }
  }
  console.log(isDrop)
  return (
    <section
      className="bg-primary-light overlow-auto p-2 w-100"
      style={{ minHeight: "100%" }}
    >
      <div className="breadCrumbs p-2">
        <p className="body-2 text-primary">
          dashboard/Inventory/View Inventory
        </p>
      </div>
      <div className="w-100 d-flex justify-content-end">
        <button className="btn btn-bg-primary text-white d-flex align-items-center justify-content-evenly">
          Add New Product <MdAdd />
        </button>
      </div>
      <div className="table table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category </th>
              <th scope="col">Price</th>
              <th scope="col">Weight</th>
              <th scope="col">Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="" style={{ height: "70px" }}>
              <th scope="row">1</th>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="something"
                  width={"70px"}
                  height="70px"
                />
              </td>
              <td>Sunsilk blue</td>
              <td>Health and Beauty</td>
              <td>Rs 5000</td>
              <td>Cotton</td>
              <td className="">
                <MdArrowDropDownCircle className="body-1 ms-3" onClick={()=>handleDropClick(1)}/>
              </td>
              <td>
                <div className="d-flex mt-1 ms-1">
                <AiFillDelete className="body-1 "/>
                <FiEdit className="body-1 ms-2" />
                  </div>
              </td>
            </tr>
            {getIsDrop(1) ? <tr  >
              <td colSpan={8}>
              some further details only show when click to element  </td>
            </tr>
            : null}

<tr className="" style={{ height: "70px" }}>
              <th scope="row">1</th>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="something"
                  width={"70px"}
                  height="70px"
                />
              </td>
              <td>Sunsilk blue</td>
              <td>Health and Beauty</td>
              <td>Rs 5000</td>
              <td>Cotton</td>
              <td className="">
                <MdArrowDropDownCircle className="body-1 ms-3" onClick={()=>handleDropClick(2)}/>
              </td>
              <td>
                <div className="d-flex mt-1 ms-1">
                <AiFillDelete className="body-1 "/>
                <FiEdit className="body-1 ms-2" />
                  </div>
              </td>
            </tr>
            {getIsDrop(2) ? <tr  >
              <td colSpan={8}>
              some further details only show when click to element  </td>
            </tr>
            : null}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewInventory;
