import React from "react";

const Checkbox = (props) => {
  return (
    <div className="checkbox-container">
        <input type="checkbox" />
        <p>{props.list}</p>
    </div>
    
  );
}

export default Checkbox;
