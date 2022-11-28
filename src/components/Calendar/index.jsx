import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Calendar = ({ control }) => {
  // const nodeRef = React.useRef(null);
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name="identity.birthday"
          control={control}
          rules={{
            required: {
              message: "Required",
              value: true,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <KeyboardDatePicker
              required={true}
              value={value}
              label="Date of Birth"
              autoComplete="date-of-birth"
              variant="standard"
              margin="normal"
              id="date-picker-dialog"
              format="MM/dd/yyyy"
              onChange={onChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              // error={!!error}
              // helperText={error ? error.message : null}
            />
          )}
        ></Controller>
      </MuiPickersUtilsProvider>

      {/* <Controller
        // nodeRef={nodeRef}
        name="DateOfBirth"
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            required
            label="Date of Birth"
            autoComplete="date-of-birth"
            variant="standard"
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            // required="true"
            // rules={{ required: true }}
            {...rest}
          />
        )}
      /> */}
    </>
  );
};
export default Calendar;
