import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

/**
 * @description A calendar input for a form.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.control - The control object from `react-hook-form`.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label for the field.
 * @param {Date} props.maxDate - The maximum date that can be selected.
 * @returns {React.Component} The rendered `Calendar` component.
 */
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
                  id={name}
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
                        transition: ".3s",
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
