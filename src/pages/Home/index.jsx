import { useForm } from "react-hook-form";
import {
  // useEffect,
  useState,
} from "react";

import Calendar from "../../components/Calendar";
import States from "../../components/States";
import IdentityInput from "../../components/Identity";
import Address from "../../components/Address";
import Departments from "../../components/Departments";
import Modal from "../../components/Modal";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
import Button from "@mui/material/Button";
import {
  useDispatch,
  // useSelector
} from "react-redux";
import { addEmployee } from "../../slices/employeeSlice";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.employee.employeesArray);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });

  // useEffect(() => {
  //   localStorage.setItem("employees", JSON.stringify(data), [data]);
  //   // console.log("Registered employees", data);
  // });

  // /* onSubmit V1 */
  // const onSubmit = (data) => {
  //   /* This is a ternary operator. It is saying if there is something in localStorage, then parse it
  //   and set it to employees. If there is nothing in localStorage, then set employees to an empty
  //   array. */
  //   const employees = JSON.parse(localStorage.getItem("employees")) || [
  //     ...initialEmployeeList,
  //   ];
  //   /* Pushing the data into the employees array. */
  //   employees.push(data);
  //   /* Setting the employees array to localStorage. */
  //   localStorage.setItem("employees", JSON.stringify(employees));
  //   setShowModal(true);
  //   reset();

  //   console.log("Submit result", employees);
  // };

  /* onSubmit V2 */
  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    setShowModal(true);
    reset();
  };

  return (
    <>
      <div className="container">
        <form
          className={classes.pageContent}
          id="create-employee"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <IdentityInput
                control={control}
                name="firstName"
                label="First name"
              />
              <IdentityInput
                control={control}
                name="lastName"
                label="Last name"
              />
            </Grid>
            <Grid item xs={4}>
              <Calendar
                control={control}
                name="birthDay"
                label="Date of Birth"
                maxDate={moment().subtract(18, "years")}
              />

              <Calendar control={control} name="startDate" label="Start Date" />
            </Grid>
            <Grid item xs={6}>
              <p>Address</p>
              <Address
                control={control}
                controllerPattern={
                  /^(?!.* {2})[A-zÀ-ž0-9_ -']*((-|\s)*[A-zÀ-ž0-9_ -'])*$/g
                }
                inputPropsPattern="(?!.* {2})[A-zÀ-ž0-9_ -']{2,50}"
                minLength="2"
                maxLength="50"
                name="street"
                label="Street"
              />
              <Address
                control={control}
                controllerPattern={
                  /^(?!.* {2})[A-zÀ-ž_ -']*((-|\s)*[A-zÀ-ž_ -'])*$/g
                }
                inputPropsPattern="(?!.* {2})[A-zÀ-ž_ -']{2,50}"
                minLength="2"
                maxLength="50"
                name="city"
                label="City"
              />
              <States control={control} label="States"></States>

              <Address
                control={control}
                controllerPattern={/^(?!.* {2})[_0-9_ -]*((-|\s)*[_0-9_ -])*$/g}
                inputPropsPattern="(?!.* {2})[0-9_ -]{4,9}"
                minLength="4"
                maxLength="9"
                name="zipCode"
                label="Zip Code"
              />
              <Departments control={control} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={!isValid}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </form>
        <Modal
          openModal={showModal}
          closeModal={() => setShowModal(false)}
          message={"Employee has been created"}
        ></Modal>
      </div>
    </>
  );
}
