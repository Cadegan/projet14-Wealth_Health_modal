import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
import State from "../../components/State";
// import { TextField } from "@material-ui/core";
import TextField from "@mui/material/TextField";
// import { Autocomplete } from "@mui/material";
import IdentityInput from "../../components/Identity";

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
          <IdentityInput
            control={control}
            name="firstName"
            label="First name"
          />
          <IdentityInput control={control} name="lastName" label="Last name" />

          <Calendar control={control} />

          <section className="startDateSection">
            <p>Start Date</p>
          </section>

          {/**
           * Adress section
           */}
          <section className="adressSection">
            <p>Adress</p>
            {/**
             * Street Input
             */}
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
                    value: /^[_A-z0-9_ -]*((-|\s)*[_A-z0-9_ -])*$/g,
                    message: "Special characters not allowed",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please enter less than 30 characters",
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
                      pattern: "[A-Za-z0-9_ -]{3,30}",
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>

            {/**
             * City Input
             */}
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
                    value: /^[_A-z_ -]*((-|\s)*[_A-z_ -])*$/g,
                    message: "Special characters not allowed",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please enter less than 30 characters",
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
                      pattern: "[A-Za-z_ -]{3,30}",
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>

            {/**
             * State Input
             */}
            <div className="state">
              <State control={control}></State>
            </div>
          </section>

          {/**
           * Zip Code Input
           */}
          <div className="zipCode">
            <Controller
              name="adress.zipCode"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                },
                pattern: {
                  value: /^[_0-9_ -]*((-|\s)*[_0-9_ -])*$/g,
                  message: "Not allowed",
                },
                minLength: {
                  value: 4,
                  message: "Please enter at least 4 characters",
                },
                maxLength: {
                  value: 9,
                  message: "Please enter less than 9 characters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  required={true}
                  value={value}
                  id="zipCode"
                  label="Zip Code"
                  onChange={onChange}
                  inputProps={{
                    pattern: "[0-9_ -]{4,9}",
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </div>

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
