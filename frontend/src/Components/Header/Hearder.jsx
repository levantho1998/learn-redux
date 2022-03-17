import "./header.css";
import React from "react";
import { useSelector } from "react-redux";

function Hearder({ setEdit }) {
  const user = useSelector((state) => state.user);
  return (
    <>
      <header style={{ backgroundColor: `${user.themeColor}` }}>
        <div className="info-container">
          <div onClick={() => setEdit(true)} className="info-edit">
            Edit
          </div>
          <img className="info-ava" src={user.avaUrl} alt="" />
          <div className="info-username"> {user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
}

export default Hearder;
