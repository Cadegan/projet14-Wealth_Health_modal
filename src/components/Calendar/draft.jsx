import React, { useState } from "react";
import SnoozeIcon from "@material-ui/icons/Snooze";
import AlarmIcon from "@material-ui/icons/AddAlarm";
import { IconButton, InputAdornment } from "@material-ui/core";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";

function CustomDateTimePicker(props) {
  const [clearedDate, handleClearedDateChange] = useState(null);
  const [selectedDate, handleDateChange] = useState(
    new Date("2019-01-01T18:54")
  );

  return (
    <>
      <DateTimePicker
        autoOk
        disableFuture
        hideTabs
        ampm={false}
        value={selectedDate}
        onChange={handleDateChange}
        allowKeyboardControl={false}
        minDate={new Date("2018-01-01")}
        helperText="Hardcoded helper text"
        leftArrowIcon={<AlarmIcon />}
        leftArrowButtonProps={{ "aria-label": "Prev month" }}
        rightArrowButtonProps={{ "aria-label": "Next month" }}
        rightArrowIcon={<SnoozeIcon />}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <AlarmIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <KeyboardDateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        label="Keyboard with error handler"
        onError={console.log}
        minDate={new Date("2018-01-01T00:00")}
        format="yyyy/MM/dd hh:mm a"
      />

      <DateTimePicker
        clearable
        value={clearedDate}
        onChange={handleClearedDateChange}
        helperText="Clear Initial State"
      />
    </>
  );
}

export default CustomDateTimePicker;

// // v2
// <KeyboardDatePicker
//   clearable
//   required={true}
//   value={clearedDate}
//   // label="Date of Birth"
//   label={label}
//   autoComplete={name}
//   variant="standard"
//   margin="normal"
//   id={name}
//   format="MM/dd/yyyy"
//   onChange={handleClearedDateChange}
//   KeyboardButtonProps={{
//     "aria-label": "change date",
//   }}
//   // error={!!error}
//   // helperText={error ? error.message : null}
// />;
