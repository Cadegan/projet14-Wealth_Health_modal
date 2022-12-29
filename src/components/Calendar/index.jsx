import { Controller } from "react-hook-form";

import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

const Calendar = ({ control, name, label, maxDate }) => {
  return (
    <div className={`${name}`}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
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
          render={({
            field: { onChange, value },
            fieldState: { error, invalid },
          }) => (
            <MobileDatePicker
              // showToolbar={false}
              maxDate={maxDate}
              required={true}
              value={value}
              label={`${label} *`}
              autoComplete={name}
              inputFormat="MM/DD/YYYY"
              inputVariant="outlined"
              onChange={onChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              renderInput={(params) => (
                // console.log(invalid),
                <TextField
                  id="dateOfBirth"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  {...params}
                  error={invalid}
                  helperText={invalid ? error.message : " "}
                ></TextField>
              )}
            ></MobileDatePicker>
          )}
        ></Controller>
      </LocalizationProvider>
    </div>
  );
};
export default Calendar;
