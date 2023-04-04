import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ right: 30, top: 30, bottom: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={{
        orient: "right",
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: "",
        legendOffset: -7,
      }}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
      motionConfig="default"
    />
  );
};

export default MyResponsiveLine;
