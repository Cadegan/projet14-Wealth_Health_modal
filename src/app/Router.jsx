import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/Header";

/* A way to load the component only when it is needed. */
const Home = lazy(() => import("../pages/Home"));
const Table = lazy(() => import("../pages/EmployeeList"));
const Error = lazy(() => import("../pages/Error"));
const theme = createMuiTheme();

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Suspense>
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
