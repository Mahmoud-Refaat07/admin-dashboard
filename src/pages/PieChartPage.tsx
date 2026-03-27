import { PieChart } from "@mui/x-charts/PieChart";
import UpperTitles from "../components/UpperTitles";

const PieChartPage = () => {
  return (
    <>
      <UpperTitles title="Pie Chart" subTitle="Simple pie charts" />
      <PieChart
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        series={[
          {
            data: [
              { id: 0, value: 80, label: "React" },
              { id: 1, value: 60, label: "Vue" },
              { id: 2, value: 70, label: "Angular" },
            ],
          },
        ]}
        width={500}
        height={500}
      />
    </>
  );
};

export default PieChartPage;
