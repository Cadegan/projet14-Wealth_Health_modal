import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const IdentityInput = ({ control, name, label }) => {
  return (
    <section className={`${name}Section`}>
      <Controller
        name={`identity.${name}`}
        control={control}
        rules={{
          required: {
            message: "Required",
            value: true,
          },
          pattern: {
            value: /^[_A-z_ -]*((-|\s)*[_A-z_ -])*$/g,
            message: "Special characters not allowed",
          },
          minLength: {
            value: 3,
            message: "Please enter at least 3 characters",
          },
          maxLength: {
            value: 15,
            message: "Please enter less than 15 characters",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required={true}
            value={value}
            id={name}
            label={label}
            onChange={onChange}
            inputProps={{
              pattern: "[A-Za-z_ -]{3,15}",
            }}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </section>
  );
};

export default IdentityInput;
