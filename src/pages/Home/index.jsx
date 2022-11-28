import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
import State from "../../components/State";
// import { TextField } from "@material-ui/core";
import TextField from "@mui/material/TextField";
// import { Autocomplete } from "@mui/material";

export default function Home() {
  const {
    // register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });

  // console.log("errors", errors);

  const [data, setData] = useState(null);

  // const [value, setValue] = useState("");
  // const [valid, setValid] = useState(true);

  // const handleValidation = (e) => {
  //   setValue(e.target.value);
  //   const reg = new RegExp("[A-Za-z]");
  //   setValid(reg.test(e.target.value));
  //   console.log("isValid?", reg.test(e.target.value));
  // };

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
              name="identity.firstName"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                },
                pattern: {
                  value: /^[_A-z_ -]*((-|\s)*[_A-z_ -])*$/g,
                  message: "Special characters not allowed",
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
                  value={value}
                  id="firstName"
                  label="First name"
                  onChange={onChange}
                  inputProps={{
                    pattern: "[A-Za-z_ -]{3,15}",
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
              name="identity.lastName"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                },
                pattern: {
                  value: /^[_A-z_ -]*((-|\s)*[_A-z_ -])*$/g,
                  message: "Special characters not allowed",
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
                  value={value}
                  id="lastName"
                  label="Last name"
                  onChange={onChange}
                  inputProps={{
                    pattern: "[A-Za-z_ -]{3,15}",
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </section>

          {/**
           * Birth day calendar
           */}
          <section className="birthDaySection">
            <Calendar control={control}></Calendar>
          </section>

          {/**
           * Start date calendar
           */}
          <section className="startDateSection">
            <p>Start Date</p>
          </section>

          {/**
           * Adress section
           */}
          <section className="adressSection">
            <p>Adress</p>
            <div className="street">
              <Controller
                name="adress.street"
                control={control}
                rules={{
                  required: {
                    message: "Required",
                    value: true,
                  },
                  pattern: {
                    value: /^[_A-z0-9_ -]*((-|\s)*[_A-z_ -])*$/g,
                    message: "Special characters not allowed",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Please enter less than 50 characters",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required={true}
                    value={value}
                    id="streetName"
                    label="Street"
                    onChange={onChange}
                    inputProps={{
                      pattern: "[A-Za-z0-9_ -]{3,15}",
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
            <div className="city">
              <Controller
                name="adress.city"
                control={control}
                rules={{
                  required: {
                    message: "Required",
                    value: true,
                  },
                  pattern: {
                    value: /^[_A-z0-9_ -]*((-|\s)*[_A-z_ -])*$/g,
                    message: "Special characters not allowed",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Please enter less than 50 characters",
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required={true}
                    value={value}
                    id="cityName"
                    label="City"
                    onChange={onChange}
                    inputProps={{
                      pattern: "[A-Za-z0-9_ -]{3,15}",
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
            <div className="state">
              <State control={control}></State>
            </div>
          </section>

          {/* 
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
