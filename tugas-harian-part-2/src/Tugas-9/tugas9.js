import React from "react"
import Logo from "../assets/img/logo.png"

const Checkbox = (props) => {
  return (
    <div class="checkbox-container">
      <input type="checkbox" /> <p>{props.list}</p>
    </div>
  )
}

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
          <button className="button">Send</button>      
    </div>
  );
}

export default Tugas9;
