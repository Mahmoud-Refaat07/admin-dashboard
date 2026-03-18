import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
}

const UpperTitles = ({ title, subTitle }: Props) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

export default UpperTitles;
