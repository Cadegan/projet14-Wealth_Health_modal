// import { Controller, useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import Calendar from "../../components/Calendar";
// // import { TextField } from "@material-ui/core";
// import { TextField, Grid, Box, Button } from "@mui/material";

// export default function Home() {
//   const { control, handleSubmit } = useForm({
//     reValidateMode: "onBlur",
//   });

//   const myHelper = {
//     input: {
//       required: "Email is Required",
//       pattern: "Invalid Email Address",
//     },
//   };

//   const [data, setData] = useState(null);

//   // const [value, setValue] = useState("");
//   // const [valid, setValid] = useState(true);

//   // const handleValidation = (e) => {
//   //   setValue(e.target.value);
//   //   const reg = new RegExp("[a-z]");
//   //   setValid(reg.test(e.target.value));
//   //   console.log("isValid?", reg.test(e.target.value));
//   // };

//   const handleOnSubmit = (evt) => {
//     console.log(evt);
//   };

//   useEffect(() => {
//     /* This is a ternary operator. It is saying if there is something in localStorage, then parse it
//     and set it to employees. If there is nothing in localStorage, then set employees to an empty
//     array. */
//     const employees = JSON.parse(localStorage.getItem("employees")) || [];
//     employees.push(data);
//     localStorage.setItem("employees", JSON.stringify(employees));
//   });

//   return (
//     <div className="App">
//       <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
//         <Grid container spacing={3}>
//           <Grid item xs={6}>
//             <Controller
//               control={control}
//               name="email"
//               defaultValue=""
//               // rules={{
//               //   required: true,
//               //   pattern: "[a-z]{3,15}",
//               // }}
//               rules={{
//                 maxLength: {
//                   value: 15,
//                   message: "Must be less than 6 char",
//                 },
//                 minLength: {
//                   value: 3,
//                   // message: "Must be greater 1 char",
//                 },
//                 required: {
//                   // message: "Required",
//                   value: true,
//                 },
//               }}
//               render={({ field, fieldState: { errors } }) => (
//                 <TextField
//                   {...field}
//                   type="text"
//                   fullWidth
//                   label="Email With Validation"
//                   error={errors !== undefined}
//                   helperText={errors ? myHelper.input[errors.type] : ""}
//                   // rules={{
//                   //   required: true,
//                   //   pattern: "[a-z]{3,15}",
//                   // }}
//                   /** */
//                   inputProps={{
//                     pattern: "[a-z]{3,15}",
//                     required: true,
//                   }}
//                 />
//               )}
//             />
//           </Grid>
//           {/* <Grid item xs={12}>
//             {members.map((field, index) => (
//               <Grid container key={field.id} spacing={1} alignItems="center">
//                 <Grid item xs={6}>
//                   <Controller
//                     control={control}
//                     // must use . for the object key!!!
//                     name={`members.${index}.email`}
//                     defaultValue=""
//                     render={({ field }) => (
//                       <TextField {...field} type="email" fullWidth />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={4}>
//                   <Controller
//                     control={control}
//                     // must use . for the object key!!!
//                     name={`members.${index}.role`}
//                     defaultValue="user"
//                     render={({ field }) => (
//                       <Select {...field} fullWidth>
//                         <MenuItem value="user">Member</MenuItem>
//                         <MenuItem value="admin">Admin</MenuItem>
//                       </Select>
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Button
//                     color="error"
//                     variant="text"
//                     onClick={() => removeMemberRow(index)}
//                   >
//                     Delete
//                   </Button>
//                 </Grid>
//               </Grid>
//             ))}
//             <Button variant="contained" onClick={addNewMemeber}>
//               Add
//             </Button>
//           </Grid> */}
//           <Grid item xs={12}>
//             <Button type="submit">Submit</Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }

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
              name="firstName"
              control={control}
              rules={{
                required: {
                  message: "Required",
                  value: true,
                  // pattern: "[A-Za-z]",
                },
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Please no characters",
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
                    pattern: "[A-Za-z]{3,15}",
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
                    pattern: "[A-Za-z]{3,15}",
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
