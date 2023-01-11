import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

/**
 * @description Input for identity
 *
 * @param {Object} props - The props for the component.
 * @param {Object} props.control - The control object from `react-hook-form`.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label for the field.
 * @returns {React.Component} The IdentityInput component.
 */
const IdentityInput = ({ control, name, label }) => {
  return (
    <div className={`${name}Section`}>
      <Controller
        name={`identity.${name}`}
        control={control}
        defaultValue={""}
        rules={{
          required: {
            message: `${label} required`,
            value: true,
          },
          pattern: {
            value: /^(?!.* {2})[A-zÀ-ž-' ]*((-|\s)*[A-zÀ-ž-' ])*$/g,
            message: "Special characters not allowed",
          },
          minLength: {
            value: 2,
            message: "Please enter at least 2 characters",
          },
          maxLength: {
            value: 50,
            message: "Please enter less than 50 characters",
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
              pattern: "(?!.* {2})[A-zÀ-ž-' ]*((-|s)*[A-zÀ-ž-' ]){2,50}",
            }}
            error={!!error}
            helperText={error ? error.message : " "}
          />
        )}
      />
    </div>
  );
};

export default React.memo(IdentityInput);
