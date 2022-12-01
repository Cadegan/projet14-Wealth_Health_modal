import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
// import TextField from "@mui/material/TextField";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";

const BirthDayCalendar = () => {
  const schema = yup.object().shape({
    dateOfBirth: yup
      .string()
      .nullable()
      .test("dateOfBirth", "You must be 18 years or older", function (value) {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      })
      .required("Please enter your age"),
  });

  const {
    // register,
    // handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    // criteriaMode: "all",
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          onChange={(value) => onChange(moment(value).format("YYYY-MM-DD"))}
          renderInput={(params) => (
            console.log(invalid),
            (
              <TextField
                required={true}
                id="dateOfBirth"
                variant="standard"
                margin="dense"
                fullWidth
                color="primary"
                autoComplete="bday"
                {...params}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )
          )}
        />
      )}
    />
  </LocalizationProvider>;
};

export default BirthDayCalendar;
