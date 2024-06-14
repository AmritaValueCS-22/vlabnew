import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { setValue } from "../../helpers/localStorage";
import Snackbar from "../../Components/common/snackbar";

const userDetailsList = {
  fullname: "",
  email: "",
  password: "",
  confirmpassword: "",
  age: "",
  gender: "",
  phonenumber: "",
  state: "",
  country: "",
  profession: "",
  college: "",
  subject: "",
  university: "",
  schoolId: "",
  username: "",
};

const initialState = {
  loading: false,
  registerData: {
    ...userDetailsList,
  },
  editedUsers: {
    ...userDetailsList,
  },
};
const abortController = new AbortController();
const signal = abortController.signal;

export const login = createAsyncThunk("login", async (data) => {
  const res = await network.post({
    url: `/login`,
    data: JSON.stringify(data),
    isFormData: false,
    signal,
  });
  const result = await res?.json();

  if (result.status === 200) {
    Snackbar({
      type: "success",
      content: result.message,
    });

    setCookies(result.token);
    setValue("userRole", result.role);
    setValue("userId", result.userId);
    setValue("isLoggedIn", true);
    setValue("name", result.userName);
  } else if (result.status === 400) {
    console.log("hi");
    Snackbar({
      type: "error",
      content: result.error,
    });
  }
  return result;
});
export const register = createAsyncThunk(
  "register",
  async (data, navigation = null) => {
    const res = await network.post({
      url: `/register`,
      data: JSON.stringify(data),
      signal,
    });
    const result = await res?.json();

    if (result.status === 200) {
      Snackbar({
        type: "success",
        content: result.message,
      });
      navigation("/login");
    } else if (result.status === 400) {
      Snackbar({
        type: "error",
        content: result.error,
      });
    }
    return result;
  }
);

export const logOut = createAsyncThunk("logout", async (data) => {
  const res = await network.get({
    url: `/logout/${data.userId}/${data.token}`,
    params: true,
    signal,
  });
  const result = await res?.json();
  console.log(result);
});

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateResisterData: (state, action) => {
      return {
        ...state,
        registerData: action.payload,
      };
    },
    clearState: (state, action) => {
      return {
        ...state,
        loading: false,
        registerData: {
          fullname: "",
          email: "",
          password: "",
          confirmpassword: "",
          age: "",
          gender: "",
          phonenumber: "",
          state: "",
          country: "",
          profession: "",
          college: "",
          subject: "",
          university: "",
          schoolId: "",
          username: "",
          role: "",
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(logOut.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { updateResisterData, clearState } = authReducer.actions;
export default authReducer.reducer;
