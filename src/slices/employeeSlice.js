import { createSlice } from "@reduxjs/toolkit";
import initialEmployeeList from "../dataMoked.json";

/* V3 */
const initialState = {
  employeesArray:
    JSON.parse(localStorage.getItem("employees")) || initialEmployeeList,
};

export const employeeSlice = createSlice({
  name: "addEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeesArray.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
