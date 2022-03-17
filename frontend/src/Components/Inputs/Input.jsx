import React from "react";
import "../Edit/edit.css";

function Input({ inputType, classType, label, data, setData }) {
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type={inputType}
          className={classType}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
