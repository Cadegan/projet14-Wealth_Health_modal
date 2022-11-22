import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployeesDetails = createAsyncThunk(
  "auth/fetchEmployeesDetails",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "public/employees.json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { ...response.data };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
