import React, { useEffect } from "react";
import NodalFormuser from "./NodalFormUser";

const NodalAddUser = ({ onHandleChange, state, isEdit = false }) => {
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
      <NodalFormuser onHandleChange={onHandleChange} state={state} isEdit={isEdit} />
    </div>
  );
};

export default NodalAddUser;
