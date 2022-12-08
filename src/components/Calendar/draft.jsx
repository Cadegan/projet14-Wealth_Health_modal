import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

const CalendarTest = ({ control, name, label, maxDate }) => {
  return (
    <div className={`${name}`}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name={`identity.${name}`}
          control={control}
          defaultValue={null}
          // rules={{
          //   required: {
          //     message: "Required",
          //     value: true,
          //   },
          // }}
          render={({
            field: { onChange, value },
            fieldState: { error, invalid },
          }) => (
            <MobileDatePicker
              maxDate={maxDate}
              required={true}
              value={value}
              label={label}
              autoComplete={name}
              inputFormat="MM/dd/yyyy"
              fullWidth
              inputVariant="outlined"
              onChange={onChange}
              renderInput={(params) => (
                // console.log(invalid),
                <TextField
                  id="dateOfBirth"
                  variant="standard"
                  margin="dense"
                  // type="date"
                  fullWidth
                  color="primary"
                  autoComplete="bday"
                  {...params}
                  // error={!!error}
                  // helperText={error ? error.message : " "}
                ></TextField>
              )}
            ></MobileDatePicker>
          )}
        ></Controller>
      </LocalizationProvider>
    </div>
  );
};
export default CalendarTest;
