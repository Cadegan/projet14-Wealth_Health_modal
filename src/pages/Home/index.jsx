import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
// import { TextField } from "@material-ui/core";
import TextField from "@mui/material/TextField";

export default function Home() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState(null);

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const handleValidation = (e) => {
    setValue(e.target.value);
    const reg = new RegExp("[a-z]");
    setValid(reg.test(e.target.value));
  };

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
          <section className="firstNameSection">
            <Controller
              rules={{ required: true, minLength: 2 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  autoComplete="given-name"
                  onChange={(e) => handleValidation(e)}
                  inputProps={{ pattern: "[a-z]" }}
                  error={!valid}
                />
              )}
              name="firstName"
              control={control}
            />
            {errors.firstName && (
              <span className="text-error">
                Please enter at least 2 characters
              </span>
            )}
          </section>

          <section className="lastNameSection">
            <Controller
              rules={{ required: true, minLength: 2 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  autoComplete="family-name"
                />
              )}
              name="lastName"
              control={control}
            />
            {errors.lastName && (
              <span className="text-error">
                Please enter at least 2 characters
              </span>
            )}
          </section>

          <section className="birthDaySection">
            <Calendar control={control}></Calendar>
          </section>

          <section className="addressSection">
            <div className="street">
              <Controller
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="streetAddress"
                    name="streetAddress"
                    label="Street"
                    autoComplete="street-address"
                  />
                )}
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
              <Controller
                rules={{ required: true, minLength: 1 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="cityAddress"
                    name="cityAddress"
                    label="City"
                    autoComplete="city-address"
                  />
                )}
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
