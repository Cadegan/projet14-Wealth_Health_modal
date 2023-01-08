import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import { departmentCollection } from "../../services/departments";

const Department = ({ control }) => {
  return (
    <div className="department">
      <Controller
        name="department"
        control={control}
        defaultValue={""}
        rules={{
          required: {
            message: "Required",
            value: true,
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            sx={{
              ".MuiInputBase-root": {
                "&.Mui-focused fieldset": {
                  borderLeftWidth: 6,
                  padding: "4px !important",
                },
              },
            }}
            select
            fullWidth
            required={true}
            // value={value || "select"}
            value={value}
            id="department"
            label="Department"
            aria-label="department"
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : " "}
          >
            {departmentCollection.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      ></Controller>
    </div>
  );
};

export default Department;
