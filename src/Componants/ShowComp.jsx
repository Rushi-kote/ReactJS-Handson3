import React from "react";
import { useLocation } from 'react-router-dom';

function ShowComp() {
  let data = useLocation();
  return (
    <div className="footer-container">
      {data.state.feedback.map((value, index) => {
        return (
          <div className="flex-items" key={index}>
            <span>
              Name:{value.Name} | Department: {value.Department} | Rating:{" "}
              {value.Rating}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ShowComp;
