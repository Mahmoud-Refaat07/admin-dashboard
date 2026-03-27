import { BarChart } from "@mui/x-charts/BarChart";
import UpperTitles from "../components/UpperTitles";

const BarChartPage = () => {
  const dataset = [
    {
      london: 1000,
      paris: 1200,
      newYork: 1500,
      seoul: 800,
    },
    {
      london: 1200,
      paris: 1400,
      newYork: 1600,
      seoul: 900,
    },
    {
      london: 1300,
      paris: 1400,
      newYork: 1500,
      seoul: 1200,
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
    },
  ];
  return (
    <>
      <UpperTitles
        title="Bar Chart"
        subTitle="The minimum wage in USA, France, England and Seuol"
      />
      <BarChart
        sx={{ width: "100%", height: "100%" }}
        dataset={dataset}
        xAxis={[{ data: ["2022", "2023", "2024"] }]}
        series={[
          { dataKey: "london", label: "London" },
          { dataKey: "paris", label: "Paris" },
          { dataKey: "newYork", label: "New York" },
          { dataKey: "seoul", label: "Seoul" },
        ]}
        height={500}
      />
    </>
  );
};

export default BarChartPage;
