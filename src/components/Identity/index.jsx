import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const IdentityInput = ({ control, name, label }) => {
  return (
    <div className={`${name}Section`}>
      <Controller
        name={`identity.${name}`}
        control={control}
        rules={{
          required: {
            message: `${label} required`,
            value: true,
          },
          pattern: {
            value: /^(?!.* {2})[A-zÀ-ž_ -']*((-|\s)*[A-zÀ-ž_ -'])*$/g,
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
            fullWidth
            required={true}
            value={value || ""}
            id={name}
            label={label}
            onChange={onChange}
            inputProps={{
              pattern: "(?!.* {2})[A-zÀ-ž_ -']{2,50}",
            }}
            error={!!error}
            helperText={error ? error.message : " "}
          />
        )}
      />
    </div>
  );
};

export default IdentityInput;
