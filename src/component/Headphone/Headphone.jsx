import React from "react";
import "./Headphone.css";

const Headphone = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        <li className="pp">{products.name}</li>
      </ul>
    </div>
  );
};

export default Headphone;
