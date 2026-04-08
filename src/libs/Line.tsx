import { Box, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const categories = [
  "plane",
  "helicopter",
  "boat",
  "train",
  "subway",
  "bus",
  "car",
  "moto",
  "bicycle",
  "horse",
  "skateboard",
  "others",
];

const dataSeries = [
  {
    label: "France",
    data: [79, 28, 150, 173, 234, 98, 244, 295, 287, 157, 239, 69],
  },
  {
    label: "US",
    data: [278, 222, 65, 213, 89, 278, 231, 47, 126, 191, 95, 26],
  },
  {
    label: "Germany",
    data: [3, 187, 259, 294, 158, 146, 125, 253, 230, 287, 193, 12],
  },
  {
    label: "Norway",
    data: [213, 271, 22, 270, 97, 146, 116, 159, 165, 210, 76, 126],
  },
];

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? 280 : 500 }}>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: categories,
          },
        ]}
        series={dataSeries}
        height={isDashboard ? 280 : 500}
      />
    </Box>
  );
};

export default Line;
