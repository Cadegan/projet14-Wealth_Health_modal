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

  // useEffect(() => {
  //   dispatch(actionType.getEmployeeList);
  // });
  // console.log("**dispatch**", tableData);

  let data = useSelector((state) => state.employee.employeesArray);
  console.log("**useSelector**", data);

  const columns = [
    // { field: "id", headerName: "Id", flex: 1,, },
    // { field: "firstName", headerName: "First Name", flex: 1 },
    // { field: "lastName", headerName: "Last Name", flex: 1 },
    // { field: "birthDay", headerName: "Birth Day", flex: 1 },
    // { field: "startDate", headerName: "Start Date", flex: 1 },
    // { field: "street", headerName: "Street", flex: 1 },
    // { field: "city", headerName: "City", flex: 1 },
    // { field: "name", headerName: "State", flex: 1 },
    // { field: "zipCode", headerName: "Zip Code", flex: 1 },
    // { field: "department", headerName: "Department", flex: 1 },

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
    { name: "name", label: "State", options: { filterType: "dropDown" } },
    {
      name: "zipCode",
      label: "Zip Code",
      options: { filterType: "textField" },
    },
    {
      name: "department",
      label: "Department",
      options: { filterType: "dropDown" },
    },
  ];

  // let rows = [];
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
  // console.log("**Rows loaded**", rows);

  // const options = {
  //   filter: true, // show the filter icon in the toolbar (true by default)
  //   filterType: "dropdown",
  //   responsive: "standard",
  //   serverSide: true,
  //   rowsPerPage: 50,
  //   rowsPerPageOptions: [50],

  //   // // makes it so filters have to be "confirmed" before being applied to the
  //   // // table's internal filterList
  //   // confirmFilters: true,
  // };

  const options = {
    // search: searchBtn,
    // download: downloadBtn,
    // print: printBtn,
    // viewColumns: viewColumnBtn,
    // filter: filterBtn,
    // filterType: "dropdown",
    filterType: "textField",
    responsive: "standard",
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100],
    filter: true,

    // selectableRows: "multiple",
    // tableBodyHeight,
    // tableBodyMaxHeight,
    // onTableChange: (action, state) => {
    //   console.log(action);
    //   console.dir(state);
    // },
  };

  return (
    <MUIDataTable
      title={"Employee List"}
      options={options}
      data={rows}
      columns={columns}
    ></MUIDataTable>
  );
};

export default Table;
