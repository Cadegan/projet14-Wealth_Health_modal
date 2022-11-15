import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState();

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  });

  //   // localStorage
  //   const localStorageData = (data) => {
  //     const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //     const employee = {
  //       firstName: firstName.value,
  //       lastName: lastName.value,
  //     };
  //     employees.push(data);
  //     localStorage.setItem("employees", JSON.stringify(data));
  //   };

  return (
    <main className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(setData)}>
          <div className="firstNameGroup">
            <label className="firstNameLabel">
              First Name
              <input
                type="text"
                className="userForm-input firstNameInput"
                {...register("firstName", { required: true, minLength: 3 })}
              />
              <p className="error-message">{errors.name?.message}</p>
            </label>
          </div>
          <div className="lastNameGroup">
            <label className="lastNameLabel">
              Last Name
              <input
                type="text"
                className="userForm-input lastNameInput"
                {...register("lastName", { required: true, minLength: 3 })}
              />
              <p className="error-message">{errors.name?.message}</p>
            </label>
          </div>
          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
