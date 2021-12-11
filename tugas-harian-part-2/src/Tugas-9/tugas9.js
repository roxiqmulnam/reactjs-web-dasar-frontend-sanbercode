import React from "react";
import Logo from "../assets/img/logo.png";
import Button from "../elements/button/button";
import Checkbox from "../elements/list/checkbox";

const Tugas9 = () => {
  return (
  <div className="card">

      <div className="title">
        <img src={Logo} alt="sanbercode"/>
        <h1>THINGS TO DO</h1>
        <p>During bootcamp in sanbercode</p>
      </div>

      <div className="list">
          <Checkbox list="Belajar GIT & CLI" />
          <Checkbox list="Belajar HTML & CSS" />
          <Checkbox list="Belajar Javascript" />
          <Checkbox list="Belajar ReactJS Dasar" />
          <Checkbox list="Belajar ReactJS Advance" />
      </div>
          <Button btn="SEND"  />       
  </div>
    
  );
}

export default Tugas9;