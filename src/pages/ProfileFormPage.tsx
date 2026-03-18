import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  type SnackbarCloseReason,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
// import { type SelectChangeEvent } from "@mui/material/Select";
import React from "react";

import { useForm, type SubmitHandler } from "react-hook-form";
import UpperTitles from "../components/UpperTitles";

const ProfileFormPage = () => {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    handleClick();
  };

  const data = [
    {
      label: "Admin",
      value: "Admin",
    },
    {
      label: "Manager",
      value: "Manager",
    },
    {
      label: "User",
      value: "User",
    },
  ];

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // const regPassword =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <UpperTitles
        title={"CRAETE USER"}
        subTitle={"Create a New User Profile"}
      />
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            sx={{ flex: "1" }}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "This field is requried" : null}
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="filled"
            sx={{ flex: "1" }}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "This field is requried" : null}
            {...register("lastName", { required: true, maxLength: 20 })}
          />
        </Stack>

        <TextField
          label="Email"
          variant="filled"
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "Please provide a vaild email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
        />
        <TextField
          label="Contact Number"
          variant="filled"
          error={Boolean(errors.contactNumber)}
          helperText={
            errors.contactNumber ? "Please provide a vaild phone number" : null
          }
          {...register("contactNumber", {
            required: true,
            minLength: 10,
          })}
        />
        <TextField
          label="Address 1"
          variant="filled"
          {...register("address1")}
        />
        <TextField
          label="Address 2"
          variant="filled"
          {...register("address2")}
        />

        <TextField
          select
          label="Role"
          defaultValue="User"
          variant="filled"
          {...register("role", { required: true })}
        >
          {data.map((x) => (
            <MenuItem key={x.value} value={x.value}>
              {x.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "uppercase" }}
          >
            Create New User
          </Button>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%", color: "white" }}
            >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileFormPage;
