import { useForm } from "react-hook-form";
import {
  useState,
  // useEffect
} from "react";
import Calendar from "../../components/Calendar";
import State from "../../components/State";
import IdentityInput from "../../components/Identity";
import Address from "../../components/Address";
import Departments from "../../components/Departments";
import Modal from "../../components/Modal";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();

  const {
    // register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const onSubmit = (data) => {
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));
    setShowModal(true);
    // alert(JSON.stringify(data, null, 2));
  };

  console.log("Submit result", employees);
  // console.log("errors", errors);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   /* This is a ternary operator. It is saying if there is something in localStorage, then parse it
  //   and set it to employees. If there is nothing in localStorage, then set employees to an empty
  //   array. */
  //   const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //   employees.push(data);
  //   localStorage.setItem("employees", JSON.stringify(employees));
  //   console.log("ok");
  // });

  return (
    <main className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form className={classes.pageContent} onSubmit={handleSubmit(onSubmit)}>
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
              {/* <section> */}
              {/* V1 */}
              <Calendar
                control={control}
                name="birthDay"
                label="Date of Birth"
                maxDate={moment().subtract(18, "years")}
              />

              <Calendar control={control} name="startDate" label="Start Date" />

              {/* </section> */}
            </Grid>
            <Grid item xs={6}>
              {/* <section className="AddressSection"> */}
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
              <State label="State" control={control}></State>
              {/* </section> */}
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
              <button className="button" type="submit" disabled={!isValid}>
                Save
              </button>
              {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
            </Grid>
          </Grid>
        </form>
        <Modal
          openModal={showModal}
          closeModal={() => setShowModal(false)}
        ></Modal>
      </div>
    </main>
  );
}
