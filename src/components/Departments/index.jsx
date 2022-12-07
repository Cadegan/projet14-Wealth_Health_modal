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
        rules={{
          required: {
            message: "Required",
            value: true,
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            select
            fullWidth
            required={true}
            // defaultValue="select"
            value={value || "select"}
            id="department"
            label="Department"
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
