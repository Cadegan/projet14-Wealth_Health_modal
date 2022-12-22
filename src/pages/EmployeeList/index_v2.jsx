import React, { useEffect, useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import actionType from "../../slices/actionType";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";

const Table = () => {
  const dispatch = useDispatch();
  const [tableData, setTableDate] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  let data = useSelector((state) => state.employee.employeesArray);
  console.log("**useSelector**", data);

  const columns = [
    {
      name: "firstName",
      label: "First Name",
      options: { filterType: "textField" },
    },
    {
      name: "lastName",
      label: "Last Name",
      options: { filterType: "textField" },
    },
    {
      name: "birthDay",
      label: "Birth Day",
    },
    {
      name: "startDate",
      label: "Start Date",
    },
    { name: "street", label: "Street" },
    { name: "city", label: "City" },
    { name: "name", label: "State" },
    {
      name: "zipCode",
      label: "Zip Code",
      options: { filterType: "textField" },
    },
    {
      name: "department",
      label: "Department",
    },
  ];

  let rows = data.map((obj, id) => {
    return {
      id: id,
      firstName: obj.identity.firstName,
      lastName: obj.identity.lastName,
      birthDay: obj.identity.birthDay,
      startDate: obj.identity.startDate,
      street: obj.address.street,
      city: obj.address.city,
      zipCode: obj.address.zipCode,
      name: obj.address.state.name,
      department: obj.department,
    };
  });

  const options = {
    filterType: "textField",
    responsive: "vertical",
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100],
    filter: true,
  };

  return (
    <MUIDataTable
      // title={"Employee List"}
      options={options}
      data={rows}
      columns={columns}
    ></MUIDataTable>
  );
};

export default Table;
