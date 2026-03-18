import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";
import UpperTitles from "../components/UpperTitles";

interface RowProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  access: string;
}

const TeamPage = () => {
  const theme = useTheme();

  const rows = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "Admin",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "Admin",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "Admin",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      access: "Manager",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      access: "Manager",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      access: "User",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      access: "User",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      access: "User",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      access: "User",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { access } }: { row: RowProps; access: string }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : theme.palette.success.light,
              color: "white",
              p: "5px",
              mt: "10px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsIcon fontSize="small" />
            ) : access === "Manager" ? (
              <SecurityIcon fontSize="small" />
            ) : (
              <LockOpenIcon fontSize="small" />
            )}
            <Typography sx={{ fontWeight: "bold", ml: 1 }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <UpperTitles title={"TEAM"} subTitle={"Managing the Team Members"} />
      <div style={{ height: 600, width: "98%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-expect-error DataGrid column type mismatch
          columns={columns}
        />
      </div>
    </Box>
  );
};

export default TeamPage;
