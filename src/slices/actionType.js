import initialEmployeeList from "../dataMoked.json";

const getEmployeeList = () => {
  const data = localStorage.getItem("employees");
  // console.log("**Employees in localStorage**", { data });
  const employees = data == null ? initialEmployeeList : JSON.parse(data);
  // const resultsData = data?.resultsData;
  console.log("**getEmployeeList**", { employees });
  return employees;
};

const setEmployeeList = (employees) => {
  localStorage.setItem("employeesList", JSON.stringify(employees));
};

const storageList = { getEmployeeList, setEmployeeList };
export default storageList;

// import employeeList from "../../public/employee-data.json";

// export const getEmployeeList = () => {
//   const employees = JSON.parse(localStorage.getItem("employees")) || [];
//   return employees;
// };

// // const employees = JSON.parse(localStorage.getItem("employees")) || [];
// // const onSubmit = (data) => {
// //   employees.push(data);
// //   localStorage.setItem("employees", JSON.stringify(employees));
// //   setShowModal(true);
// //   reset();
// //   // alert(JSON.stringify(data, null, 2));
// // };
