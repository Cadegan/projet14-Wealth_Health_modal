import { createSlice, nanoid } from "@reduxjs/toolkit";
import ActionType from "../slices/actionType";
import initialEmployeeList from "../dataMoked.json";

// /* V3 */
// const initialState = {
//   employeesArray: JSON.parse(localStorage.getItem("list")) || [
//     ...initialEmployeeList,
//   ],
// };

export const employeeSlice = createSlice({
  name: "addEmployee",
  initialState: {
    employeeList: ActionType.getEmployeeList(),
  },
  /* reducer v3 */
  reducers: {
    addEmployee: (state, actions) => {
      ActionType.setEmployeeList(state.employeeList);
    },
  },

  /* reducer v2 */
  // reducers: {
  //   addEmployee: (state, action) => {
  //     // state.employeesArray.push(action.payload);
  //     return [...state, action.payload];
  //   },
  //   prepare: (payload) => {
  //     return {
  //       payload: {
  //         id: nanoid(),
  //         ...payload,
  //       },
  //     };
  //   },
  // },
});

export const { employeeAction } = employeeSlice.actions;
export default employeeSlice.reducer;

/* V2 */
// const employee = createSlice({
//   name: "addEmployee",
//   initialState: {
//     employeeList: actionType.getEmployeeList(),
//   },
//   reducers: {
//     addEmployee: (state, action) => {
//       // state.employeeList.ushift(action.payload);
//       actionType.setEmployeeList(state.employeeList);
//     },
//   },
// });

// const employeeAction = employee.actions;
// const employeeReducer = employee.reducer;

// export { employeeAction, employeeReducer };

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
