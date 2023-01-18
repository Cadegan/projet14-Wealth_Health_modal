import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

/**
 * @description A form input for an address field.
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.control - The control object from `react-hook-form`.
 * @param {string} props.controllerPattern - The pattern to use for the `Controller`.
 * @param {string} props.inputPropsPattern - The pattern to use for the `inputProps`.
 * @param {number} props.minLength - The minimum length for the field.
 * @param {number} props.maxLength - The maximum length for the field.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label for the field.
 * @returns {React.Component} The rendered `Address` component.
 */
const Address = React.memo(
  ({
    control,
    controllerPattern,
    inputPropsPattern,
    minLength,
    maxLength,
    name,
    label,
  }) => {
    return (
      <React.Fragment>
        <div className={`${name}`}>
          <Controller
            name={`address.${name}`}
            control={control}
            defaultValue={""}
            rules={{
              required: {
                message: `${label} required`,
                value: true,
              },
              pattern: {
                value: controllerPattern,
                message: "Special characters not allowed",
              },
              minLength: {
                value: minLength,
                message: `Please enter at least ${minLength} characters`,
              },
              maxLength: {
                value: maxLength,
                message: `Please enter less than ${maxLength} characters`,
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                sx={{
                  "& input:valid:focus + fieldset": {
                    borderLeftWidth: 6,
                    padding: "4px !important",
                    transition: ".3s",
                  },
                  "& input:invalid:focus + fieldset": {
                    borderLeftWidth: 6,
                    padding: "4px !important",
                    transition: ".3s",
                  },
                }}
                fullWidth
                required={true}
                value={value}
                id={name}
                aria-label={name}
                label={label}
                onChange={onChange}
                inputProps={{
                  pattern: inputPropsPattern,
                }}
                error={!!error}
                helperText={error ? error.message : " "}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
);

export default Address;
