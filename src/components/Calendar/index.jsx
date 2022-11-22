import * as React from "react";
import { Controller } from "react-hook-form";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function Agenda({ control }) {
  // <MuiPickersUtilsProvider utils={AdapterMoment}>
  //   <Controller
  //     name="MUIPicker"
  //     control={control}
  //     render={({ field: { ref, ...rest } }) => (
  //       <KeyboardDatePicker
  //         margin="normal"
  //         id="date-picker-dialog"
  //         format="MM/DD/YYYY"
  //         KeyboardButtonProps={{
  //           "aria-label": "change date",
  //         }}
  //         {...rest}
  //       ></KeyboardDatePicker>
  //     )}
  //   ></Controller>
  // </MuiPickersUtilsProvider>;

  <div className="container">
    <section>
      <label>MUI Picker</label>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name="MUIPicker"
          control={control}
          render={({ field: { ref, ...reste } }) => (
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              {...reste}
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </section>
  </div>;
}
