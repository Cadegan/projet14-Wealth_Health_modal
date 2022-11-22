import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   TextField,
//   Checkbox,
//   Select,
//   MenuItem,
//   Switch,
//   RadioGroup,
//   FormControlLabel,
//   ThemeProvider,
//   Radio,
//   createMuiTheme,
//   Slider,
// } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
// import MuiAutoComplete from "./MuiAutoComplete";

export default ({ control }) => (
  <div className="container">
    <section>
      <label>MUI Picker</label>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name="MUIPicker"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              {...rest}
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </section>
  </div>
);
