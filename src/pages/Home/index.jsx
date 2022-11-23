import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
import { TextField } from "@material-ui/core";

export default function Home() {
  const {
    // register,
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
          {/* <section className="firstNameSection">
            <label className="firstNameLabel">First Name</label>
            <input
              type="text"
              className="userForm-input firstNameInput"
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <p className="text-error">Please check the First Name</p>
            )}
          </section> */}

          <section className="firstNameSection">
            <label for="firstName" className="firstNameLabel">
              First Name
            </label>
            <Controller
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => <TextField {...field} />}
              name="firstName"
              control={control}
            />
            {errors.firstName && <span className="text-error">required</span>}
          </section>

          {/* <section className="lastNameSection">
            <label className="lastNameLabel">Last Name</label>
            <input
              type="text"
              className="userForm-input lastNameInput"
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <p className="text-error">Please check the Last Name</p>
            )}
          </section> */}

          <section className="lastNameSection">
            <label for="lastName" className="lastNameLabel">
              Last Name
            </label>
            <Controller
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => <TextField {...field} />}
              name="lastName"
              control={control}
            />
            {errors.lastName && <span className="text-error">required</span>}
          </section>

          <section className="birthDaySection">
            <Calendar control={control}></Calendar>
          </section>

          <section className="addressSection">
            <div className="street">
              <label for="streetAddress" className="streetAddressLabel">
                Street
              </label>
              <Controller
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => <TextField {...field} />}
                name="streetAddress"
                control={control}
              />
              {errors.streetAddress && (
                <span className="text-error">required</span>
              )}
            </div>
          </section>

          <section className="citySection">
            <div className="city">
              <label for="cityAddress" className="cityAddressLabel">
                City
              </label>
              <Controller
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => <TextField {...field} />}
                name="cityAddress"
                control={control}
              />
              {errors.cityAddress && (
                <span className="text-error">required</span>
              )}
            </div>
          </section>

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
