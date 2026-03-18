import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import UpperTitles from "../components/UpperTitles";

const InvoicesPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 33 },
    { field: "ip", headerName: "IP", flex: 1, headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 33,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1.1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipcode",
      headerName: "Zip Code",
    },
  ];

  const [rows, setRows] = React.useState([]);

  const theme = useTheme();

  React.useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        console.log(data);

        const formatData = data.users.map((item) => ({
          id: item.id,
          ip: item.ip,
          name: item.firstName + " " + item.lastName,
          age: item.age,
          email: item.email,
          phone: item.phone,
          address: item.address.address,
          city: item.address.city,
          zipcode: item.address.postalCode,
        }));
        console.log(formatData[0].address.postalCode);
        setRows(formatData);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      } catch (error: any) {
        console.log("Error at fetching data");
      }
    };

    fetchingData();
  }, []);

  return (
    <Box>
      <UpperTitles title="INVOICES" subTitle="List of invoice Balances" />
      <div style={{ height: 600, width: "98%", margin: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-expect-error DataGrid column type mismatch
          columns={columns}
        />
      </div>
    </Box>
  );
};

export default InvoicesPage;
