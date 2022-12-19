import React, { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import actionType from "../../slices/actionType";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function EmployeeList() {
  const { data } = useDemoData({
    // const { data } = storageList.getEmployeeList({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const [pageSize, setPageSize] = useState(10);

  return (
    <DataGrid
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
      {...data}
      components={{ Toolbar: GridToolbar }}
    />
  );
}
