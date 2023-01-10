import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import { getStatesCollection } from "../../services/states";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const useStyles = makeStyles({
  autocompleteClass: {
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderLeftWidth: 6,
        padding: "4px !important",
        transition: ".3s",
      },
  },
});

/**
 * @description A component for selecting a state from a list of options.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.control - The control object provided by react-hook-form.
 * @param {string} props.label - The label to display above the input field.
 * @returns {React.Component} The rendered `States` component
 */
const State = ({ control, label }) => {
  const classes = useStyles();

  /* Decomment here and the second option in Autocomplete to group names by their first letter */
  // const options = getStatesCollection.map((option) => {
  //   const firstLetter = option.name[0].toUpperCase();
  //   return {
  //     firstLetter,
  //     ...option,
  //   };
  // });
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
            // options={options.sort(
            //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            // )}
            // groupBy={(option) => option.firstLetter}
            value={field.value || null}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => <span>{option.name}</span>}
            renderInput={(params) => (
              <TextField
                // style={{ backgroundColor: "pink" }}
                className={classes.autocompleteClass}
                {...params}
                label={label}
                aria-label={"states"}
                variant="outlined"
                required={true}
                error={!!error}
                helperText={error ? error.message : " "}
              ></TextField>
            )}
            onChange={(_, value) => field.onChange(value)}
          ></Autocomplete>
        )}
      ></Controller>
    </div>
  );
};

export default React.memo(State);
