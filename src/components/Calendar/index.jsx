import * as React from "react";
import { Controller } from "react-hook-form";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Calendar({ control }) {
  <MuiPickersUtilsProvider utils={AdapterMoment}>
    <Controller
      name="MUIPicker"
      control={control}
      render={({ field: { ref, ...rest } }) => (
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/DD/YYYY"
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          {...rest}
        ></KeyboardDatePicker>
      )}
    ></Controller>
  </MuiPickersUtilsProvider>;
}
