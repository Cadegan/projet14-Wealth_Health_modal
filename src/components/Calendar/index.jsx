import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Calendar = ({ control, name, label }) => {
  const [clearedDate, handleClearedDateChange] = useState(null);

  return (
    <div
      className={`${name}`}
      // className="birthDaySection"
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name={`identity.${name}`}
          control={control}
          rules={{
            required: {
              message: "Required",
              value: true,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <KeyboardDatePicker
              clearable
              required={true}
              value={value}
              // label="Date of Birth"
              label={label}
              autoComplete={name}
              variant="standard"
              margin="normal"
              id={name}
              format="MM/dd/yyyy"
              onChange={onChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              // error={!!error}
              // helperText={error ? error.message : null}
            />
            // // v2
            // <KeyboardDatePicker
            //   clearable
            //   required={true}
            //   value={clearedDate}
            //   // label="Date of Birth"
            //   label={label}
            //   autoComplete={name}
            //   variant="standard"
            //   margin="normal"
            //   id={name}
            //   format="MM/dd/yyyy"
            //   onChange={handleClearedDateChange}
            //   KeyboardButtonProps={{
            //     "aria-label": "change date",
            //   }}
            //   // error={!!error}
            //   // helperText={error ? error.message : null}
            // />;
          )}
        ></Controller>
      </MuiPickersUtilsProvider>
    </div>
  );
};
export default Calendar;
