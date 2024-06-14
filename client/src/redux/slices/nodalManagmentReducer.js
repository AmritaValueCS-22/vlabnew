import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crudId: 1,
  cardColor: "primary",
  loading: false,
  nodalDetails: {
    schoolName: "",
    schoolAddress: "",
    state: "",
    district: "",
    pincode: "",
  },
};

const nodalManagementReducer = createSlice({
  name: "nodalManagement",
  initialState,
  reducers: {
    modifyCrudOperation: (state, action) => {
      return {
        ...state,
        crudId: action.payload,
      };
    },
    modifyCardColor: (state, action) => {
      return {
        ...state,
        cardColor: action.payload,
      };
    },
    updateNodalDetails: (state, action) => {
      return {
        ...state,
        nodalDetails: {
          ...state.nodalDetails,
          ...action.payload,
        },
      };
    },
    clearNodalDetails: (state, action) => {
      return {
        ...state,
        nodalDetails: {
          schoolName: "",
          schoolAddress: "",
          state: "",
          district: "",
          pincode: "",
        },
      };
    },
  },
});

export const {
  modifyCrudOperation,
  modifyCardColor,
  updateNodalDetails,
  clearNodalDetails,
} = nodalManagementReducer.actions;
export default nodalManagementReducer.reducer;
