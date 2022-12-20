import React, { useEffect, useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import actionType from "../../slices/actionType";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

// export default function EmployeeList() {
//   // let data = useSelector((state) => state.employeeSlice.employeesArray);

//   const { data } = useDemoData({
//     // const { data } = storageList.getEmployeeList({
//     dataSet: "Employee",
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });

const columns = [
  { field: "firstName", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  { field: "birthDay", headerName: "Birth Day" },
  { field: "startDate", headerName: "Start Date" },
  { field: "street", headerName: "Street" },
  { field: "city", headerName: "City" },
  { field: "name", headerName: "State" },
  { field: "zipCode", headerName: "Zip Code" },
  { field: "department", headerName: "Department" },
];

const Table = () => {
  const [tableData, setTableDate] = useState([]);
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(actionType.getEmployeeList);
  });

  console.log(tableData);

  return (
    <DataGrid
      rows={tableData}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 25, 50, 100]}
      pagination
      // autoPageSize
      sx={{
        p: 1,
        m: 2,
        color: "grey.800",
        bgcolor: "grey.50",
        border: 1,
        borderColor: "grey.100",
        borderRadius: 2,
        fontWeight: 700,
        // boxShadow: 9,
      }}
      // {...data}
      components={{ Toolbar: GridToolbar }}
    />
  );
};

export default Table;
