// /* Calandar */

// import { Controller } from "react-hook-form";

// import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
// import { TextField } from "@mui/material";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { styled } from "@material-ui/core";
// import { outlinedInputClasses } from "@mui/material/OutlinedInput";
// import { inputLabelClasses } from "@mui/material/InputLabel";

// const Calendar = ({ control, name, label, maxDate }) => {
//   // const StyledTextField = styled(TextField)({
//   //   [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
//   //     {
//   //       borderColor: "green",
//   //     },
//   //   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
//   //     {
//   //       borderColor: "red",
//   //     },
//   //   [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
//   //     {
//   //       borderColor: "purple",
//   //     },
//   //   [`& .${outlinedInputClasses.input}`]: {
//   //     color: "green",
//   //   },
//   //   [`&:hover .${outlinedInputClasses.input}`]: {
//   //     color: "red",
//   //   },
//   //   [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
//   //     {
//   //       color: "purple",
//   //     },
//   //   [`& .${inputLabelClasses.outlined}`]: {
//   //     color: "green",
//   //   },
//   //   [`&:hover .${inputLabelClasses.outlined}`]: {
//   //     color: "red",
//   //   },
//   //   [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
//   //     color: "purple",
//   //   },
//   // });

//   return (
//     <div className={`${name}`}>
//       <LocalizationProvider dateAdapter={AdapterMoment}>
//         <Controller
//           name={`identity.${name}`}
//           control={control}
//           defaultValue={null}
//           rules={{
//             required: {
//               message: "Required",
//               value: true,
//             },
//           }}
//           render={({
//             field: { onChange, value },
//             fieldState: { error, invalid },
//           }) => (
//             <MobileDatePicker
//               // showToolbar={false}
//               maxDate={maxDate}
//               required={true}
//               value={value}
//               label={`${label} *`}
//               autoComplete={name}
//               inputFormat="MM/DD/YYYY"
//               inputVariant="outlined"
//               onChange={onChange}
//               KeyboardButtonProps={{
//                 "aria-label": "change date",
//               }}
//               renderInput={(params) => (
//                 // console.log(invalid),
//                 <TextField
//                   id="dateOfBirth"
//                   variant="outlined"
//                   fullWidth
//                   color="primary"
//                   {...params}
//                   sx={{
//                     ".MuiInputBase-root": {
//                       // "& fieldset": {
//                       //   borderColor: "red",
//                       // },
//                       // "&:hover fieldset": {
//                       //   borderColor: "green",
//                       // },
//                       "&.Mui-focused fieldset": {
//                         borderLeftWidth: 6,
//                         padding: "4px !important",
//                       },
//                       // "&.Mui-success fieldset": {
//                       //   borderColor: "lightgreen",
//                       // },
//                     },
//                   }}
//                   error={invalid}
//                   helperText={invalid ? error.message : " "}
//                 ></TextField>
//               )}
//             ></MobileDatePicker>
//           )}
//         ></Controller>
//       </LocalizationProvider>
//     </div>
//   );
// };
// export default Calendar;

// /* Departement */
// import React from "react";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import { Controller } from "react-hook-form";
// import { departmentCollection } from "../../services/departments";

// const Department = ({ control }) => {
//   return (
//     <div className="department">
//       <Controller
//         name="department"
//         control={control}
//         defaultValue={""}
//         rules={{
//           required: {
//             message: "Required",
//             value: true,
//           },
//         }}
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <TextField
//             sx={{
//               ".MuiInputBase-root": {
//                 // "& fieldset": {
//                 //   borderColor: "red",
//                 // },
//                 "&:hover fieldset": {
//                   borderColor: "green",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderLeftWidth: 6,
//                   padding: "4px !important",
//                 },
//                 "&.Mui-success fieldset": {
//                   borderColor: "lightgreen",
//                 },
//               },
//             }}
//             select
//             fullWidth
//             required={true}
//             // value={value || "select"}
//             value={value}
//             id="department"
//             label="Department"
//             onChange={onChange}
//             error={!!error}
//             helperText={error ? error.message : " "}
//           >
//             {departmentCollection.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         )}
//       ></Controller>
//     </div>
//   );
// };

// export default Department;

// /* Identity */
// import { Controller } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/system";

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   "& input:valid + fieldset": {
//     borderColor: "green",
//     borderWidth: 2,
//   },
//   "& input:valid:focus + fieldset": {
//     borderLeftWidth: 6,
//     padding: "4px !important",
//   },
//   "& input:valid:hover + fieldset": {
//     borderColor: "green",
//   },
// }));

// const IdentityInput = ({ control, name, label }) => {
//   return (
//     <div className={`${name}Section`}>
//       <Controller
//         name={`identity.${name}`}
//         control={control}
//         defaultValue={""}
//         rules={{
//           required: {
//             message: `${label} required`,
//             value: true,
//           },
//           pattern: {
//             value: /^(?!.* {2})[A-zÀ-ž-' ]*((-|\s)*[A-zÀ-ž-' ])*$/g,
//             message: "Special characters not allowed",
//           },
//           minLength: {
//             value: 2,
//             message: "Please enter at least 2 characters",
//           },
//           maxLength: {
//             value: 50,
//             message: "Please enter less than 50 characters",
//           },
//         }}
//         render={({ field: { onChange, value }, fieldState: { error } }) => (
//           <StyledTextField
//             fullWidth
//             required={true}
//             value={value}
//             id={name}
//             label={label}
//             onChange={onChange}
//             inputProps={{
//               pattern: "(?!.* {2})[A-zÀ-ž-' ]*((-|s)*[A-zÀ-ž-' ]){2,50}",
//             }}
//             error={!!error}
//             helperText={error ? error.message : " "}
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default IdentityInput;

// /* State */

// import React from "react";
// import { makeStyles, TextField } from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { Controller } from "react-hook-form";
// import { getStatesCollection } from "../../services/states";
// import { outlinedInputClasses } from "@mui/material/OutlinedInput";
// import { inputLabelClasses } from "@mui/material/InputLabel";

// const useStyles = makeStyles({
//   myClass: {
//     // "&:hover": {
//     //   color: "#fefffd",
//     //   backgroundColor: "#758a11",
//     //   "& .MuiListItemIcon-root": {
//     //     color: "white",
//     //   },
//     // },
//     // "&:hover": {
//     //   backgroundColor: "#758a11",
//     // },
//     // "&.Mui-focused": {
//     //   borderLeftWidth: 6,
//     //   padding: "4px !important",
//     // },
//     // "&.Mui-success": {
//     //   borderColor: "lightgreen",
//     // },
//     // "& fieldset": {
//     //   borderColor: "red",
//     // },
//     // "& input:valid": {
//     //   borderColor: "green",
//     //   borderWidth: 2,
//     // },
//     // "& input:valid:focus": {
//     //   borderLeftWidth: 6,
//     //   padding: "4px !important",
//     // },
//     // "& input:valid:hover": {
//     //   borderColor: "green",
//     // },
//     ////
//     // [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
//     //   {
//     //     borderColor: "green",
//     //   },
//     [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
//       {
//         borderColor: "red",
//       },
//     [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
//       {
//         // borderColor: "purple",
//         borderLeftWidth: 6,
//         padding: "4px !important",
//       },
//     // [`& .${outlinedInputClasses.input}`]: {
//     //   color: "green",
//     // },
//     [`&:hover .${outlinedInputClasses.input}`]: {
//       color: "red",
//     },
//     // [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
//     //   {
//     //     color: "purple",
//     //   },
//     // [`& .${inputLabelClasses.outlined}`]: {
//     //   color: "green",
//     // },
//     [`&:hover .${inputLabelClasses.outlined}`]: {
//       color: "red",
//     },
//     // [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
//     //   color: "purple",
//     // },
//   },
// });

// const State = ({ control, label }) => {
//   const classes = useStyles();

//   // const options = getStatesCollection.map((option) => {
//   //   const firstLetter = option.name[0].toUpperCase();
//   //   return {
//   //     firstLetter,
//   //     ...option,
//   //   };
//   // });
//   return (
//     <div className="state">
//       <Controller
//         name="address.state"
//         control={control}
//         defaultValue={""}
//         rules={{
//           required: {
//             message: `${label} required`,
//             value: true,
//           },
//         }}
//         render={({ field, fieldState: { error } }) => (
//           <Autocomplete
//             options={getStatesCollection}
//             // options={options.sort(
//             //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
//             // )}
//             // groupBy={(option) => option.firstLetter}
//             value={field.value || null}
//             getOptionLabel={(option) => option.name}
//             renderOption={(option) => <span>{option.name}</span>}
//             renderInput={(params) => (
//               <TextField
//                 // style={{ backgroundColor: "pink" }}
//                 className={classes.myClass}
//                 {...params}
//                 label={label}
//                 variant="outlined"
//                 required={true}
//                 error={!!error}
//                 helperText={error ? error.message : " "}
//               ></TextField>
//             )}
//             onChange={(_, value) => field.onChange(value)}
//           ></Autocomplete>
//         )}
//       ></Controller>
//     </div>
//   );
// };

// export default State;
