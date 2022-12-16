import initialEmployeeList from "../data/dataMoked.json";

const getEmployeeList = () => {
  const data = localStorage.getItem("employeeList");
  console.log({ data });
  const list = data === null ? initialEmployeeList : JSON.parse(data);
  return list;
};

const setEmployeeList = (employeeList) => {
  localStorage.setItem("employeeList", JSON.stringify(employeeList));
};

const storageList = { getEmployeeList, setEmployeeList };
export default storageList;

// const employees = JSON.parse(localStorage.getItem("employees")) || [];
// const onSubmit = (data) => {
//   employees.push(data);
//   localStorage.setItem("employees", JSON.stringify(employees));
//   setShowModal(true);
//   reset();
//   // alert(JSON.stringify(data, null, 2));
// };
