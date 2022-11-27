import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
// import { TextField } from "@material-ui/core";
import { TextField, Grid, Box, Button } from "@mui/material";

export default function Home() {
  const { control, handleSubmit } = useForm({
    reValidateMode: "onBlur",
  });

  const myHelper = {
    input: {
      required: "Email is Required",
      pattern: "Invalid Email Address",
    },
  };

  const [data, setData] = useState(null);

  // const [value, setValue] = useState("");
  // const [valid, setValid] = useState(true);

  // const handleValidation = (e) => {
  //   setValue(e.target.value);
  //   const reg = new RegExp("[a-z]");
  //   setValid(reg.test(e.target.value));
  //   console.log("isValid?", reg.test(e.target.value));
  // };

  const handleOnSubmit = (evt) => {
    console.log(evt);
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
    <div className="App">
      <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              // rules={{
              //   required: true,
              //   pattern: "[a-z]{3,15}",
              // }}
              rules={{
                maxLength: {
                  value: 15,
                  message: "Must be less than 6 char",
                },
                minLength: {
                  value: 3,
                  // message: "Must be greater 1 char",
                },
                required: {
                  // message: "Required",
                  value: true,
                },
              }}
              render={({ field, fieldState: { errors } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="Email With Validation"
                  error={errors !== undefined}
                  helperText={errors ? myHelper.input[errors.type] : ""}
                  // rules={{
                  //   required: true,
                  //   pattern: "[a-z]{3,15}",
                  // }}
                  /** */
                  inputProps={{
                    pattern: "[a-z]{3,15}",
                    required: true,
                  }}
                />
              )}
            />
          </Grid>
          {/* <Grid item xs={12}>
            {members.map((field, index) => (
              <Grid container key={field.id} spacing={1} alignItems="center">
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    // must use . for the object key!!!
                    name={`members.${index}.email`}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField {...field} type="email" fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    control={control}
                    // must use . for the object key!!!
                    name={`members.${index}.role`}
                    defaultValue="user"
                    render={({ field }) => (
                      <Select {...field} fullWidth>
                        <MenuItem value="user">Member</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                      </Select>
                    )}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color="error"
                    variant="text"
                    onClick={() => removeMemberRow(index)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" onClick={addNewMemeber}>
              Add
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
