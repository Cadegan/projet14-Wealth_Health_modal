import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/Header";
import Home from "../pages/Home";

import Table from "../pages/EmployeeList";
// import TableList from "../pages/EmployeeList/index_vbis";
import Error from "../pages/Error";

const theme = createMuiTheme();

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/employee-list" element={<Table />}></Route>
        {/* <Route exact path="/employee-list-bis" element={<TableList />}></Route> */}
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
