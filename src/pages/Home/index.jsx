import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
// import Calendar from "../../components/Calendar";

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState(null);

  useEffect(() => {
    /* This is a ternary operator. It is saying if there is something in localStorage, then parse it
    and set it to employees. If there is nothing in localStorage, then set employees to an empty
    array. */
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  return (
    <main className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(setData)}>
          <section className="firstNameGroup">
            <label className="firstNameLabel">First Name</label>
            <input
              type="text"
              className="userForm-input firstNameInput"
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <p className="text-error">Please check the First Name</p>
            )}
          </section>
          <section className="lastNameGroup">
            <label className="lastNameLabel">Last Name</label>
            <input
              type="text"
              className="userForm-input lastNameInput"
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <p className="text-error">Please check the Last Name</p>
            )}
          </section>
          <section className="birthDayGroup">
            <label className="birthDayLabel">Date of Birth</label>
            {/* <Calendar control={control}></Calendar> */}
          </section>
          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
