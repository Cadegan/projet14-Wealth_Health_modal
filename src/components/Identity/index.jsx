import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";
// import { styled } from "@mui/system";

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   // "& input:valid + fieldset": {
//   //   borderColor: "green",
//   //   borderWidth: 2,
//   // },
//   "& input:valid:focus + fieldset": {
//     borderLeftWidth: 6,
//     padding: "4px !important",
//   },
//   // "& input:valid:hover + fieldset": {
//   //   borderColor: "green",
//   // },
// }));

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
