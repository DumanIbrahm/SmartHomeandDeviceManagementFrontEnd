import React from "react";

const Checkbox = ({ label, color, defaultChecked }) => {
  const colorClass = color === "success" ? "checkbox-success" : "";
  return (
    <div className={`checkbox-container ${colorClass}`}>
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span className="checkmark"></span>
    </div>
  );
};

export default Checkbox;
