import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import { getStatesCollection } from "../../services/states";

const State = ({ control, label }) => {
  return (
    <div className="state">
      <Controller
        name="address.state"
        control={control}
        defaultValue={""}
        rules={{
          required: {
            message: `${label} required`,
            value: true,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            options={getStatesCollection}
            value={field.value || null}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => <span>{option.name}</span>}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                required={true}
                error={!!error}
                helperText={error ? error.message : " "}
              ></TextField>
            )}
            onChange={(_, data) => field.onChange(data)}
          ></Autocomplete>
        )}
      ></Controller>
    </div>
  );
};

export default State;
