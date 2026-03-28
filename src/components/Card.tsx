import { Paper, Stack, Typography, useTheme } from "@mui/material";
import type { DataTypes } from "../libs/chartData";
import { PieChart } from "@mui/x-charts";
import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
  data: DataTypes[];
  increase: string;
}

const Card = ({ icon, title, subTitle, data, increase }: CardProps) => {
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          minWidth: "333px",
          padding: 1.5,
          display: "flex",
          justifyContent: "space-between",
          gap: 5,
          flexGrow: 1,
        }}
      >
        <Stack direction={"column"} gap={1} justifyContent={"center"}>
          {icon}
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {subTitle}
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"flex-end"}>
          <PieChart
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            series={[
              {
                data: data,
              },
            ]}
            width={100}
            height={100}
            colors={[
              theme.palette.primary.main,
              theme.palette.secondary.main,
              theme.palette.error.main,
            ]}
          />
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default Card;
