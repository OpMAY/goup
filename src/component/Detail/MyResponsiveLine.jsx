import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({ data }) => {
  const highValue = data[0].data
    .filter(item => item.y !== 0)
    .map(highs => highs.y);

  return (
    <ResponsiveLine
      data={data}
      margin={{ right: 50, top: 30, bottom: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: highValue.length > 0 ? "auto" : data[0].recent_price,
        stacked: true,
        reverse: false,
      }}
      yFormat=""
      axisTop={null}
      axisRight={{
        orient: "right",
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: "",
        legendOffset: 0,
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
