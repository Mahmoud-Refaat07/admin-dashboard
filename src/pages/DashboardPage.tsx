import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import UpperTitles from "../components/UpperTitles";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import Card from "../components/Card";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import { DownloadOutlined } from "@mui/icons-material";

import {
  firstRowData,
  secondRowData,
  thirdRowData,
  fourthRowData,
} from "../libs/chartData";

import Line from "../libs/Line";
import { Transactions } from "../libs/randomlyData";

import Bar from "./BarChartPage";
import Geo from "./GeographyChartPage";
import Pie from "./PieChartPage";

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

      <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
        <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
                fontWeight={"bold"}
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2" ml={4}>
                $59,342.32
              </Typography>
            </Box>

            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>

          <Line />
        </Paper>

        <Box
          sx={{
            overflow: "auto",
            borderRadius: "4px",
            minWidth: "280px",
            maxHeight: 355,
            flexGrow: 1,
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>

          {Transactions.map((item) => {
            return (
              <Paper
                sx={{
                  mt: 0.4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1.2}>
                  <Typography variant="body1">{item.txId}</Typography>
                  <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography variant="body1">{item.date} </Typography>

                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main,
                  )}
                  variant="body2"
                >
                  ${item.cost}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Stack>

      <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
        <Paper
          sx={{
            flexGrow: 1,
            minWidth: "400px",
            width: "28%",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 0 30px" }}
            variant="h6"
            fontWeight="600"
          >
            Campaign
          </Typography>

          <Pie />
          <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
            $48,352 revenue generated
          </Typography>
          <Typography variant="body2" px={0.7} pb={3} align="center">
            Includes extra misc expenditures and costs
          </Typography>
        </Paper>

        <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
          <Typography
            color={theme.palette.secondary.main}
            variant="h6"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>

          <Bar />
        </Paper>

        <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
          <Geo />
        </Paper>
      </Stack>
    </>
  );
};

export default DashboardPage;
