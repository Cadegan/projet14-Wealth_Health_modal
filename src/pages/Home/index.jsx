import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "../../components/Calendar";
import State from "../../components/State";
// import { TextField } from "@material-ui/core";
// import TextField from "@mui/material/TextField";
// import { Autocomplete } from "@mui/material";
import IdentityInput from "../../components/Identity";
import Address from "../../components/Address";
import Departments from "../../components/Departments";
import BirthDayCalendar from "../../components/Calendar/birthday";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import moment from "moment";
// import { Controller } from "react-hook-form";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { DatePicker } from "@mui/x-date-pickers";

export default function Home() {
  // const schema = yup.object().shape({
  //   dateOfBirth: yup
  //     .string()
  //     .nullable()
  //     .test("dateOfBirth", "You must be 18 years or older", function (value) {
  //       return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
  //     })
  //     .required("Please enter your age"),
  // });

  const {
    // register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  // console.log("errors", errors);

  const [data, setData] = useState(null);

  // const [value, setValue] = useState("");
  // const [valid, setValid] = useState(true);

  // const handleValidation = (e) => {
  //   setValue(e.target.value);
  //   const reg = new RegExp("[A-zÀ-ž]");
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
    console.log("ok");
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

          <section>
            {/* V1 */}
            <Calendar control={control} name="birthDay" label="Date of Birth" />
            {/* V2-bis */}
            {/* <BirthDayCalendar></BirthDayCalendar> */}
            <Calendar control={control} name="startDate" label="Start Date" />

            {/*V2: Contrôle de l'age partiellement buggé */}
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="dateOfBirth"
                required={true}
                control={control}
                defaultValue={null}
                render={({
                  field: { onChange, value },
                  fieldState: { error, invalid },
                }) => (
                  <DatePicker
                    label="Date of birth"
                    disableFuture
                    value={value}
                    onChange={(value) =>
                      onChange(moment(value).format("YYYY-MM-DD"))
                    }
                    renderInput={(params) => (
                      console.log(invalid),
                      (
                        <TextField
                          required={true}
                          helperText={error ? error.message : null}
                          id="dateOfBirth"
                          variant="standard"
                          margin="dense"
                          fullWidth
                          color="primary"
                          autoComplete="bday"
                          {...params}
                          error={!!error}
                        />
                      )
                    )}
                  />
                )}
              />
            </LocalizationProvider> */}
          </section>

          <section className="AddressSection">
            <p>Address</p>
            <Address
              control={control}
              controllerPattern={
                /^(?!.* {2})[A-zÀ-ž0-9_ -']*((-|\s)*[A-zÀ-ž0-9_ -'])*$/g
              }
              inputPropsPattern="(?!.* {2})[A-zÀ-ž0-9_ -']{2,50}"
              minLength="2"
              maxLength="50"
              name="street"
              label="Street"
            />
            <Address
              control={control}
              controllerPattern={
                /^(?!.* {2})[A-zÀ-ž_ -']*((-|\s)*[A-zÀ-ž_ -'])*$/g
              }
              inputPropsPattern="(?!.* {2})[A-zÀ-ž_ -']{2,50}"
              minLength="2"
              maxLength="50"
              name="city"
              label="City"
            />
            <State label="State" control={control}></State>
          </section>
          <Address
            control={control}
            controllerPattern={/^(?!.* {2})[_0-9_ -]*((-|\s)*[_0-9_ -])*$/g}
            inputPropsPattern="(?!.* {2})[0-9_ -]{4,9}"
            minLength="4"
            maxLength="9"
            name="zipCode"
            label="Zip Code"
          />
          <Departments control={control} />
          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
