import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { useDispatch } from "react-redux";
import Snackbar from "../../Components/common/snackbar";

const initialState = {
  crudId: 1,
  cardColor: "primary",
  loading: false,
  userDetails: [],
  showEditPageDetails: {
    showAdd: false,
    userEmail: "",
  },
  showDeletePageDetails: {
    showAdd: false,
    userId: "",
  },
  editUser: {},
  openUpload: false,
  bulkUserData: [],
  fileList: [],
};
const abortController = new AbortController();
const signal = abortController.signal;

export const getUserDetails = createAsyncThunk("getusers", async (data) => {
  const res = await network.get({
    url: "/user/getAllUsersList",
    data,
    signal,
  });
  const result = await res?.json();
  return result;
});

export const editUserAction = createAsyncThunk("editUser", async (data) => {
  console.log(data);
  const res = await network.put({
    url: "/user/editUser",
    data: data.data,
    query: data.query,
    signal,
  });
  const result = await res.json();
  if (result.status === 200) {
    Snackbar({
      type: "success",
      content: result.message,
    });
  } else if (result.status === 400) {
    Snackbar({
      type: "error",
      content: result.error,
    });
  }
  return result;
});
export const deleteUserAction = createAsyncThunk("editUser", async (data) => {
  const res = await network.get({
    url: "/user/deleteUser",
    data: data.query,
    signal,
  });
  const result = await res.json();
  if (result.status === 200) {
    Snackbar({
      type: "success",
      content: result.message,
    });
  } else if (result.status === 400) {
    Snackbar({
      type: "error",
      content: result.error,
    });
  }
  return result;
});
export const addBulkUserAction = createAsyncThunk("addBulk", async (data) => {
  console.log(data);
  const res = await network.post({ url: `/user/addBulk`, data, signal });
  const result = await res.json();
  if (result.status === 200) {
    Snackbar({
      type: "success",
      content: result.message,
    });
  } else if (result.status === 400) {
    Snackbar({
      type: "error",
      content: result.error,
    });
  }
  return result;
});
const userManagementReducer = createSlice({
  name: "usermanagement",
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
    updateEditPage: (state, action) => {
      return {
        ...state,
        showEditPageDetails: action.payload,
      };
    },
    updateEditUser: (state, action) => {
      return {
        ...state,
        editUser: action.payload,
      };
    },
    updateDeletePage: (state, action) => {
      return {
        ...state,
        showDeletePageDetails: action.payload,
      };
    },
    updateFileList: (state, action) => {
      return {
        ...state,
        showDeletePageDetails: action.payload,
      };
    },
    openUploadComponent: (state, action) => {
      return {
        ...state,
        openUpload: action.payload,
      };
    },
    addBulUserData: (state, action) => {
      return {
        ...state,
        bulkUserData: action.payload,
      };
    },
    setFileData: (state, action) => {
      return {
        ...state,
        fileList: action.payload,
      };
    },
    clearEditForm: (state, action) => {
      return {
        ...state,
        showEditPageDetails: {
          showAdd: false,
          userEmail: "",
        },
        showDeletePageDetails: {
          showAdd: false,
          userEmail: "",
        },
      };
    },
    clearState: (state, action) => {
      return {
        ...state,
        crudId: 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload.userDetails;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addBulkUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addBulkUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload.userDetails;
    });
    builder.addCase(addBulkUserAction.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload.userDetails;
    });
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  modifyCrudOperation,
  modifyCardColor,
  clearState,
  updateEditPage,
  clearEditForm,
  updateEditUser,
  updateDeletePage,
  openUploadComponent,
  setFileData,
  addBulUserData,
} = userManagementReducer.actions;
export default userManagementReducer.reducer;
