import React, { useEffect, useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import actionType from "../../slices/actionType";
import { useDispatch, useSelector } from "react-redux";

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
  // { field: "id", headerName: "Id", flex: 1 },
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "birthDay", headerName: "Birth Day", flex: 1 },
  { field: "startDate", headerName: "Start Date", flex: 1 },
  { field: "street", headerName: "Street", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "name", headerName: "State", flex: 1 },
  { field: "zipCode", headerName: "Zip Code", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
];

const Table = () => {
  const dispatch = useDispatch();
  const [tableData, setTableDate] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  // useEffect(() => {
  //   dispatch(actionType.getEmployeeList);
  // });
  // console.log("**dispatch**", tableData);

  const useSelectorData = useSelector((state) => state.employee.employeesArray);
  // console.log("**useSelector**", useSelectorData);

  // let rows = [];
  const rows = useSelectorData.map((obj, id) => {
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
  console.log("**Rows**", rows);

  return (
    <DataGrid
      rows={rows}
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
