import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import network from "../../utilits/common/network";
import querystring from "query-string";

const initialState = {
  labContent: {
    theory: "",
  },
  broadDetails: [],
  loading: false,
};

const abortController = new AbortController();
const signal = abortController.signal;

export const getAllBroad = createAsyncThunk("getbroad", async (data) => {
  const res = await network.get({
    url: "/broadArea/getAllBroad",
    data,
  });
  const result = await res?.json();
  return result;
});

export const addBroadDetails = createAsyncThunk("addbroad", async (data) => {
  const res = await network.post({
    url: "/broadArea/addBroad",
    data: JSON.stringify(data),
  });
  const result = await res?.json();
  return result;
});

export const addLabDetails = createAsyncThunk("addLab", async (data) => {
  const res = await network.post({
    url: "/broadArea/addLab",
    data: JSON.stringify(data),
  });
  const result = await res?.json();
  return result;
});

export const addExperiment = createAsyncThunk("addExperiment", async (data) => {
  const res = await network.post({
    url: "/broadArea/addExperiment",
    data: JSON.stringify(data),
  });
  const result = await res?.json();
  return result;
});
export const addExperimentDetails = createAsyncThunk(
  "addExperimentDetails",
  async (data) => {
    const res = await network.post({
      url: "/broadArea/addExperiment",
      data: JSON.stringify(data),
      signal,
    });
    const result = await res?.json();
    return result;
  }
);
export const uploadExperiement = createAsyncThunk(
  "uploadExperiement",
  async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("folder", data.file);
    formData.append("broadId", data.broadId);
    formData.append("labId", data.labId);
    formData.append("expId", data.expId);
    formData.append("isDocument", data.isDocument);
    const res = await network.post({
      url: "/broadArea/uploadExperiment",
      data: formData,
      signal,
      isFormData: true,
    });
    const result = await res?.json();
    return result;
  }
);

const BroadAreaReducer = createSlice({
  name: "labReducer",
  initialState,
  reducers: {
    updateTheroryContent: (state, action) => {
      state.labContent.theory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllBroad.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBroad.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(getAllBroad.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addBroadDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addBroadDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(addBroadDetails.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addLabDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addLabDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(addLabDetails.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addExperimentDetails.pending, (state, action) => {
      state.loading = true;
      state.isRefresh= false;
    });
    builder.addCase(addExperimentDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
      state.isRefresh= true;
    });
    builder.addCase(addExperimentDetails.rejected, (state, action) => {
      state.loading = false;
      state.isRefresh= false;
    });
  },
});

export const { updateTheroryContent } = BroadAreaReducer.actions;
export default BroadAreaReducer.reducer;
