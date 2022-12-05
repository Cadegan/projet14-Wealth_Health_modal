import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Calendar = ({ control, name, label }) => {
  return (
    <div
      className={`${name}`}
      // className="birthDaySection"
    >
      <Controller
        name={`identity.${name}`}
        control={control}
        defaultValue={null}
        rules={{
          required: {
            message: "Required",
            value: true,
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              // clearable
              disableFuture
              required={true}
              value={value}
              label={label}
              autoComplete={name}
              // variant="standard"
              inputVariant="outlined"
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
          </MuiPickersUtilsProvider>
        )}
      ></Controller>
    </div>
  );
};
export default Calendar;

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
