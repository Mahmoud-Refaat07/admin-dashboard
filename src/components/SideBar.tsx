import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme, type Theme } from "@mui/material/styles";
import { Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const drawerWidth = 240;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const firstSection = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/dashboard",
  },
  {
    title: "Manage Team",
    icon: <PeopleOutlineOutlinedIcon />,
    path: "/team",
  },
  {
    title: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    title: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const secondSection = [
  {
    title: "Profile Form",
    icon: <PermIdentityOutlinedIcon />,
    path: "/profile-form",
  },
  {
    title: "Calender",
    icon: <CalendarMonthOutlinedIcon />,
    path: "/calender",
  },
  {
    title: "FAQ Page",
    icon: <QuizOutlinedIcon />,
    path: "/faq",
  },
];

const thirdSection = [
  {
    title: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "/bar",
  },
  {
    title: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/pie",
  },
  {
    title: "Line Chart",
    icon: <ShowChartOutlinedIcon />,
    path: "/line",
  },
  {
    title: "Geography Chart",
    icon: <TerrainOutlinedIcon />,
    path: "/geography",
  },
];

const NavBar = ({ open, handleDrawerClose }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  console.log();

  const currentLocation = location.pathname.slice(1);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Avatar
        sx={{
          mx: "auto",
          height: open ? 88 : 44,
          width: open ? 88 : 44,
          my: 2,
          border: "2px solid gray",
          transition: "0.25s",
        }}
        alt="Remy Sharp"
        src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740&q=80"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : { xs: 9, sm: 0 },
          transition: "0.25s",
        }}
      >
        Mahmoud
      </Typography>
      <Typography
        align="center"
        sx={{
          mb: open ? 5 : 2,
          fontSize: open ? 15 : { xs: 14, sm: 0 },
          fontWeight: "bold",
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        ADMIN
      </Typography>
      <Divider />
      <List>
        {firstSection.map(({ title, icon, path }, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path.slice(1) === currentLocation
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : "",
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondSection.map(({ title, icon, path }, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path.slice(1) === currentLocation
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : "",
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {thirdSection.map(({ title, icon, path }, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    path.slice(1) === currentLocation
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : "",
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default NavBar;
