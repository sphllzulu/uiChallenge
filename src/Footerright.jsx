import "./Footerright.css";
import { IoIosArrowForward } from "react-icons/io";

import React from "react";

const Footerleft = () => {
  return (
    <div className="fr">
      <div>
        <IoIosArrowForward style={{ fontSize: "26px" }} />
      </div>

      <div className="circles">
        {/* <IoIosArrowForward  style={{ fontSize: "26px" }} /> */}
        <div className="circ"></div>
        <div className="circActive"></div>
        <div className="circ"></div>
      </div>
    </div>
  );
};

export default Footerleft;
