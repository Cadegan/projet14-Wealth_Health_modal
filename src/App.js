import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainNav from "./components/MainNav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";

function App() {
 

  return (
    <Router>
      {/* <MainNav /> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/employee-list" element={<EmployeeList />}></Route> */}
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
