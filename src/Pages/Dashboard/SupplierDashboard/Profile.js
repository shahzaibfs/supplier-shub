import React from "react";

const Profile = () => {
  return (
    <section>
      <div className="breadCrumbs p-2">
        <p className="body-2 text-primary">dashboard/profile/profile</p>
      </div>
      <div className="p-2 d-flex justify-content-between text-white">
        <div
          className="w-25 border-primary position-relative"
          style={{ height: "250px", borderRadius: "10px" }}
        >
          <img
            width={"100%"}
            height="100%"
            style={{ objectFit: "cover" }}
            src="https://www.logolynx.com/images/logolynx/0c/0cd161813d1bf6721c64af50f681e324.jpeg"
            alt="Profile Picture"
          />
          <div className="position-absolute bg-primary py-1 px-4 " style={{borderRadius:"5px" ,top:"30px",right:"-130px"}}>
            Profile Picture
          </div>
        </div>
        <div
          className="bg-primary AccountDetails d-flex flex-column align-items-center justify-content-center px-2 w-50 ms-4"
          style={{ borderRadius: "10px" }}
        >
          <h1>Account-Details</h1>
          <div>
            <article className="p-2 d-flex justify-content-center">
              <span>
                <b>UserName</b>{" "}
              </span>
              <span className="">: Muhammad Shahzaib Alam</span>
            </article>
            <article className="p-2 d-flex justify-content-center">
              <span>
                <b>Email</b>{" "}
              </span>
              <span className="">: shahzaibalam231@gmail.com</span>
            </article>
            <article className="p-2 d-flex justify-content-center">
              <span>
                <b>Passowrd</b>{" "}
              </span>
              <span className="">: somePassword</span>
            </article>
          </div>
        </div>
       
      </div>
      <div className="my-2 d-flex flex-column justify-content-center align-items-center  bg-primary p-2 mx-2 text-white" style={{borderRadius:"10px" ,minHeight:"250px"}}>
      <h1 className="mb-4">Company Details</h1>
      <div className="d-flex w-100 align-items-center justify-content-evenly " >
      <div>
            <article className="p-2 ">
              <span>
                <b>Brand Name</b>{" "}
              </span>
              <span className="">: Sunsilk</span>
            </article>
            <article className="p-2">
              <span>
                <b>Owner Name</b>{" "}
              </span>
              <span className="">: Jamshaid Ali</span>
            </article>
            <article className="p-2 ">
              <span>
                <b>Brand Creation Date</b>{" "}
              </span>
              <span className="">: 02/03/2007</span>
            </article>
          </div>

          <div>
            <article className="p-2 ">
              <span>
                <b>Phone Number</b>{" "}
              </span>
              <span className="">: 0348-33333333</span>
            </article>
            <article className="p-2">
              <span>
                <b>Address</b>{" "}
              </span>
              <span className=""> :Islamabad</span>
            </article>
            <article className="p-2 ">
              <span>
                <b>Brand Location</b>{" "}
              </span>
              <span className="">: Pindi</span>
            </article>
          </div>
      </div>
    
      </div>
    </section>
  );
};

export default Profile;
