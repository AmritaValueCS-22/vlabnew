import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Formuser from "./Formuser";
import { updateResisterData } from "../../redux/slices/authReducer";

const AddUser = ({ onHandleChange, state, isEdit = false }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Formuser onHandleChange={onHandleChange} state={state} isEdit={isEdit} />
    </div>
  );
};

export default AddUser;
