import { Box, Button, Stack, useTheme } from "@mui/material";
import UpperTitles from "../components/UpperTitles";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import Card from "../components/Card";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";

import {
  firstRowData,
  secondRowData,
  thirdRowData,
  fourthRowData,
} from "../libs/chartData";

const DashboardPage = () => {
  const theme = useTheme();
  return (
    <>
      <UpperTitles title="DASHBOARD" subTitle="Welcome to your dashboard" />
      <Box sx={{ textAlign: "right" }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
        >
          {" "}
          <DownloadDoneOutlinedIcon />
          Download Reports
        </Button>
      </Box>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          gap: 1,
          flexWrap: "wrap",
          marginTop: "10px",
        }}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Card
          icon={
            <MailOutlineOutlinedIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.dark }}
            />
          }
          title={"14,582"}
          subTitle={"Emails sent"}
          data={firstRowData}
          increase={"+21%"}
        />
        <Card
          icon={
            <PointOfSaleOutlinedIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.dark }}
            />
          }
          title={"574,483"}
          subTitle={"Sales obtained"}
          data={secondRowData}
          increase={"+27%"}
        />
        <Card
          icon={
            <PersonAddAlt1OutlinedIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.dark }}
            />
          }
          title={"32,787"}
          subTitle={"New clients"}
          data={thirdRowData}
          increase={"+53%"}
        />
        <Card
          icon={
            <TrafficOutlinedIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.dark }}
            />
          }
          title={"1,327,254"}
          subTitle={"Traffic recevied"}
          data={fourthRowData}
          increase={"+46%"}
        />
      </Stack>
      {/* <Box>row 2</Box>
      <Box>row 3</Box> */}
    </>
  );
};

export default DashboardPage;
