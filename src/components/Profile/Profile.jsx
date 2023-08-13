import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const Profile = () => {
  return <>
    <div className="p-2 d-flex flex-wrap justify-content-between align-items-center ">
      <div className="left d-flex flex-column justify-content-between  ">
        <Image style={{ width: "350px", height: "350px" }} src={require('../../assets/images/creator-1.png')} roundedCircle />
        <Button variant="outline-success" className="w-50 px-5 mx-auto">Edit Profile Image</Button>
      </div>
      <div className="right d-flex flex-column justify-content-between align-items-lg-start flex-grow-1 ">
        <div className="d-flex justify-content-between"><span>Name:</span> <h2>NikhilSingh</h2></div>
        <div> <span>Username:</span> <h6>nik22@22</h6> </div>
        <div> <span>Email:</span> <h6>ns2125560@gmail.com</h6></div>
        <div> <span>Created-At: </span> <h6>03-Aug-2023</h6></div>
      </div>
    </div>
  </>;
};

export default Profile;
