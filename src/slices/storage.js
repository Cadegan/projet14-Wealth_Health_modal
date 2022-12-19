import initialEmployeeList from "../data/dataMoked.json";

const getEmployeeList = () => {
  const data = localStorage.getItem("employees");
  console.log("**Employees in localStorage**", { data });
  const list = data == null ? initialEmployeeList : JSON.parse(data);
  // const resultsData = data?.resultsData;
  console.log("**Initial list**", { list });
  return list;
};

const setEmployeeList = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
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
