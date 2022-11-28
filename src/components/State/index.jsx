import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import { getStatesCollection } from "../../services/states";

const State = ({ control }) => {
  return (
    <div className="state">
      <Controller
        name="adress.state"
        control={control}
        rules={{
          required: {
            message: "Required",
            value: true,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            //   value={value}
            options={getStatesCollection}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => <span>{option.name}</span>}
            renderInput={(params) => (
              <TextField
                {...params}
                //   onChange={onChange}
                label="State"
                variant="outlined"
                required={true}
                error={!!error}
                helperText={error ? error.message : null}
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
