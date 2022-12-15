import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useState } from "react";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function EmployeeList() {
  const { data } = useDemoData({
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

      style={{
        height: "100vh",
        paddingTop: 24,
        border: "none",
      }}
      {...data}
      components={{ Toolbar: GridToolbar }}
    />
  );
}
