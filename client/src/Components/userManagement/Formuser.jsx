import React from "react";
import { addUserDetails } from "../../Data/userManagement";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Formuser = ({ onHandleChange, state, isEdit }) => {
  return (
    <>
      {addUserDetails.map((item) => {
        return item.isInput ? (
          <FormControl style={{ marginBlock: 5 }} key={item.id}>
            <InputLabel
              style={{
                position: "absolute",
                top: -25,
                left: -10,
                fontWeight: 600,
              }}
            >
              {item.title}
            </InputLabel>
            <TextField
              style={{
                width: 350,
                marginBlock: 15,
              }}
              key={item.id}
              id="outlined-basic"
              // label={item.title}
              variant="outlined"
              // helperText={"hi"}
              value={state[item.name]}
              // error={true}
              name={item.name}
              onChange={onHandleChange}
              placeholder={item.title}
            />
          </FormControl>
        ) : (
          <FormControl style={{ marginBlock: 5 }}>
            <InputLabel
              style={{
                position: "absolute",
                top: -25,
                left: -10,
                fontWeight: 600,
              }}
            >
              {item.title}
            </InputLabel>
            <select
              style={{
                width: 350,
                marginBlock: 15,
                padding: "16px 14px",
                outlineColor: "#4e73df",
              }}
              onChange={onHandleChange}
              value={state[item.name]}
              name={item.name}
            >
              <option value="">-- Select {item.title} --</option>
              {item.subValue.map((sub) => {
                return (
                  <option key={sub.id} value={sub.value}>
                    {sub.label}
                  </option>
                );
              })}
            </select>
          </FormControl>
        );
      })}
    </>
  );
};

export default Formuser;
