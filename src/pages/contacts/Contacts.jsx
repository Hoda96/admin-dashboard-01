import { Box } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@emotion/react";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      // editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      sortable: false,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      sortable: false,
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      flex: 1,
      sortable: false,
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      type: "number",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference."
        />
      </Box>
      {/* <Box sx={{ height: 400, width: "100%" }}> */}
      <Box
        m={"40px 0 0 0"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            "& .MuiButton-startIcon": {
              color: colors.grey[100],
            },
            "& .MuiButton-textPrimary": {
              color: colors.grey[100],
            },
            "& ..MuiDataGrid-withBorderColor:active": {
              color: colors.grey[100],
            },
          }}
        />
      </Box>
    </Box>
  );
}
// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarColumnsButton />
//       <GridToolbarFilterButton />
//       <GridToolbarDensitySelector />
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }
export default Contacts;
