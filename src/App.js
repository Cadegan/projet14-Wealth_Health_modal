import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import MainNav from "./components/MainNav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <MainNav /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/employee-list" element={<EmployeeList />}></Route> */}
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
