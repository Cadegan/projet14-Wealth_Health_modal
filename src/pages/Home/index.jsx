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
    console.log("isValid?", reg.test(e.target.value));
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
          {/**
           * First Name Input
           */}
          <section className="firstNameSection">
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                  // pattern: "[a-z]",
                },
                minLength: {
                  value: 3,
                  message: "Please enter at least 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Please enter less than 15 characters",
                },
                // pattern: "[a-z]",
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required={true}
                  id="firstName"
                  label="First name"
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    pattern: "[a-z]{3,15}",
                    // minLength: 3,
                    // maxLength: 15,
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </section>

          {/**
           * Last Name Input
           */}
          <section className="lastNameSection">
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                },
                minLength: {
                  value: 3,
                  message: "Please enter at least 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Please enter less than 15 characters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required={true}
                  id="lastName"
                  label="Last name"
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    pattern: "[a-z]{3,15}",
                    // minLength: 3,
                    // maxLength: 15,
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </section>

          {/* 

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
          </section> */}

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
