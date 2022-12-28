import {
  createSlice,
  // ,nanoid
} from "@reduxjs/toolkit";
// import actionType from "../slices/actionType";
import initialEmployeeList from "../dataMoked.json";

/* V3 */
const initialState = {
  employeesArray: JSON.parse(localStorage.getItem("employees")) || [
    ...initialEmployeeList,
  ],
};

export const employeeSlice = createSlice({
  name: "addEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      /* v1 */
      state.employeesArray.push(action.payload);

      /* v2 */
      // return [...state, action.payload];
    },
    // prepare: (payload) => {
    //   return {
    //     payload: {
    //       // id: nanoid(),
    //       ...payload,
    //     },
    //   };
    // },
  },
});

export const { addEmployee } = employeeSlice.actions;
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
