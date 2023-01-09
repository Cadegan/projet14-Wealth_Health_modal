import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const Calendar = ({ control, name, label, maxDate }) => {
  const AdapterMoment = useMemo(
    () => require("@mui/x-date-pickers/AdapterMoment").AdapterMoment,
    []
  );

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
                <TextField
                  id="dateOfBirth"
                  aria-label={name}
                  variant="outlined"
                  fullWidth
                  color="primary"
                  {...params}
                  sx={{
                    ".MuiInputBase-root": {
                      "&.Mui-focused fieldset": {
                        borderLeftWidth: 6,
                        padding: "4px !important",
                      },
                    },
                  }}
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

export default React.memo(Calendar);
