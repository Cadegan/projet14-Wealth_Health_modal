import React, { useEffect, useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useSelector } from "react-redux";
import { format } from "date-fns";
import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";

/**
 * @description Array of objects representing the columns of the table.
 *
 * @type {Array}
 */
const columns = [
  // { field: "id", headerName: "Id", minWidth: 50, flex: 1 },
  { field: "firstName", headerName: "First Name", minWidth: 120, flex: 1 },
  { field: "lastName", headerName: "Last Name", minWidth: 120, flex: 1 },
  {
    field: "birthDay",
    headerName: "Birth Day",
    renderCell: ({ value }) =>
      value ? format(new Date(value), `LL/dd/yyyy`) : "N/A",
    type: "date",
    minWidth: 110,
    flex: 1,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    renderCell: ({ value }) =>
      value ? format(new Date(value), `LL/dd/yyyy`) : "N/A",
    type: "date",
    minWidth: 110,
    flex: 1,
  },
  { field: "street", headerName: "Street", minWidth: 250, flex: 1 },
  { field: "city", headerName: "City", minWidth: 120, flex: 1 },
  { field: "name", headerName: "State", minWidth: 160, flex: 1 },
  {
    field: "zipCode",
    headerName: "Zip Code",
    minWidth: 100,
    flex: 1,
  },
  { field: "department", headerName: "Department", minWidth: 150, flex: 1 },
];

/**
 * @description Renders a table with rows of employee data.
 *
 * @param {Object} state - The current state of the application.
 * @param {Array} state.employee.employeesArray - An array of employee objects.
 * @param {Object} options - The options object for the table.
 * @param {Number} options.pageSize - The number of rows to display on each page.
 * @param {function} options.setPageSize - A function to set the number of rows displayed per page.
 * @param {Function} options.onPageSizeChange - A callback function to be called when the page size changes.
 *
 * @returns {React.Component} The rendered table.
 */
const Table = () => {
  const [pageSize, setPageSize] = useState(10);

  const data = useSelector((state) => state.employee.employeesArray);

  /**
   * @description Returns an array of objects representing the rows of the table.
   * The value is memoized with 'useMemo()' to avoid recalculating
   * the array unless 'data' changes.
   * @param {Array} data - An array of employee objects.
   * @returns {Array} The array of rows.
   */
  const rows = useMemo(
    () =>
      data.map((obj, id) => ({
        id:
          /*If 'id' is undefined, a unique id is generated with nanoid() */
          id || nanoid(),
        firstName: obj.identity.firstName,
        lastName: obj.identity.lastName,
        birthDay: obj.identity.birthDay,
        startDate: obj.identity.startDate,
        street: obj.address.street,
        city: obj.address.city,
        zipCode: obj.address.zipCode,
        name: obj.address.state.name,
        department: obj.department,
      })),
    [data]
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(data), []);
    // console.log("Registered employees", data);
  });

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 25, 50, 100]}
      pagination
      sx={{
        p: 1,
        m: 2,
        color: "grey.800",
        bgcolor: "grey.50",
        border: 1,
        borderColor: "grey.100",
        borderRadius: 2,
        fontWeight: 700,
      }}
      components={{ Toolbar: GridToolbar }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
    />
  );
};

export default Table;
