import { RadarChart } from "@mui/x-charts/RadarChart";
import UpperTitles from "../components/UpperTitles";

const GeographyChartPage = () => {
  return (
    <>
      <UpperTitles title="Geography Chart" subTitle="Study subjects groups" />
      <RadarChart
        height={500}
        series={[{ label: "Lisa", data: [120, 98, 86, 99, 85, 65] }]}
        radar={{
          metrics: [
            { name: "Math", max: 120 },
            { name: "Chinese", max: 120 },
            { name: "English", max: 120 },
            { name: "Geography", max: 120 },
            { name: "Physics", max: 120 },
            { name: "History", max: 120 },
          ],
        }}
      />
    </>
  );
};

export default GeographyChartPage;
