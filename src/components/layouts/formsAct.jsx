import React from "react";
import "./style.css";
import FormsBox from "../stuff/formBox";

export default function FormsAct(){
  const [formData, setFormData] = React.useState({
    fname: '',
    lname: '',
    gender: '',
    about: '',
    civilStatus: '',
    birthdate: '2000-01-01',
    age: '',
    email: '',
    phoneNumber: '',
    photo: '',
  });

  const [imageUrl, setImageUrl] = React.useState('');


  return (
  <div className="forms-container">
    <div className="left-col">
      <h2>Submitted Profile</h2>
      <div className="left-col-row1">
        <div className="lcr1-col1">
          <div className="photo">
            {imageUrl ? <img src={imageUrl} alt="User" /> : null}
          </div>
        </div>
        <div className="lcr1-col2">
          <div className="lcr1-col2-rows">
            <h1>complete name</h1>
              <div className="displayFlex">
                <div className="fname">{formData.fname}</div>
                <div className="lname">{formData.lname}</div>
              </div>
          </div>
          <div className="lcr1-col2-rows">
            <h1>gender & civil status</h1>
              <div className="displayFlex">
                <div className="gender">{formData.gender}</div>
                <div className="civilStatus">{formData.civilStatus}</div>
              </div>
          </div>
          <div className="lcr1-col2-rows">
            <h1>age & bdate</h1>
              <div className="displayFlex">
                <div className="age">{formData.age}</div>
                <div className="birthdate">{formData.birthdate}</div>
              </div>
          </div>
        </div>
      </div>
      <div className="left-col-row2">
        <div className="lcr2-col1">
            <h1>about</h1>
            <div className="about">{formData.about}</div>
        </div>
        <div className="lcr2-col2">
          <h1>phone & email address</h1>
              <div className="displayFlex">
                <div className="phone">{formData.phoneNumber}</div>
                <div className="email">{formData.email}</div> 
            </div>
        </div>
      </div>
    </div>
    <div className="right-col">
      <FormsBox setFormData={setFormData} setImageUrl={setImageUrl}  />
    </div>
  </div>
  );
};