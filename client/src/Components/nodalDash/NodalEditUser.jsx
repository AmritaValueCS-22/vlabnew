import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNodalDetails,
  clearNodalDetails,
} from "../../redux/slices/nodalManagmentReducer";

const NodalEdit = () => {
  const dispatch = useDispatch();
  const nodalDetails = useSelector((state) => state.nodalManagement.nodalDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateNodalDetails({ [name]: value }));
  };

  const handleClear = () => {
    dispatch(clearNodalDetails());
  };

  return (
    <div>
      <h2>Nodal Edit</h2>
      <form>
        <div>
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={nodalDetails.schoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="schoolAddress">School Address</label>
          <input
            type="text"
            id="schoolAddress"
            name="schoolAddress"
            value={nodalDetails.schoolAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={nodalDetails.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="district">District</label>
          <input
            type="text"
            id="district"
            name="district"
            value={nodalDetails.district}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={nodalDetails.pincode}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
};

export default NodalEdit;
