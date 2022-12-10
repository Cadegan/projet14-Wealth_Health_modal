import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  // KeyboardDatePicker,
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";

const Calendar = ({ control, name, label, maxDate }) => {
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
            <DatePicker
              maxDate={maxDate}
              required={true}
              value={value}
              label={label}
              autoComplete={name}
              fullWidth
              inputVariant="outlined"
              // margin="normal"
              id={name}
              format="MM/dd/yyyy"
              onChange={onChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              error={!!error}
              helperText={error ? error.message : " "}
            />
          </MuiPickersUtilsProvider>
        )}
      ></Controller>
    </div>
  );
};
export default Calendar;
