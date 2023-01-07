import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/Header";
// import Box from "@mui/material/Box";
// import { LinearProgress } from "@material-ui/core";

const Home = lazy(() => import("../pages/Home"));
const Table = lazy(() => import("../pages/EmployeeList"));
const Error = lazy(() => import("../pages/Error"));
const theme = createMuiTheme();

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Suspense
      // fallback={
      //   <Box sx={{ width: "100%" }}>
      //     <LinearProgress />
      //   </Box>
      // }
      >
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/employee-list" element={<Table />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default Router;
