import { createSlice } from "@reduxjs/toolkit";
import actionType from "../slices/actionType";

const employee = createSlice({
  name: "addEmployee",
  initialState: {
    employeeList: actionType.getEmployeeList(),
  },

  reducers: {
    addEmployee: (state, action) => {
      // state.employeeList.ushift(action.payload);
      actionType.setEmployeeList(state.employeeList);
    },
  },
});

const employeeAction = employee.actions;
const employeeReducer = employee.reducer;

export { employeeAction, employeeReducer };

////////////////////////////////////////////////////////////////////////

// const {
//   // register,
//   handleSubmit,
//   reset,
//   control,
//   formState: { isValid },
// } = useForm({
//   criteriaMode: "all",
//   mode: "onChange",
// });
// const employees = JSON.parse(localStorage.getItem("employees")) || [];
// const onSubmit = (data) => {
//   employees.push(data);
//   localStorage.setItem("employees", JSON.stringify(employees));
//   setShowModal(true);
//   reset();
//   // alert(JSON.stringify(data, null, 2));
// };

// console.log("Submit result", employees);

//////////////////////////////////////////////////////////////////////////

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getEmployeesDetails = createAsyncThunk(
//   "auth/fetchEmployeesDetails",
//   async (arg, { rejectWithValue }) => {
//     try {
//       const response = await axios({
//         method: "post",
//         url: "public/employees.json",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return { ...response.data };
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
