import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@/lib/axios.js";


export const fetchNotificationsThunk = createAsyncThunk(
  "notifications/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/notifications", { withCredentials: true });
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch notifications");
    }
  }
);
