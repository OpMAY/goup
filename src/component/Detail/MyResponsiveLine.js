import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = () => (
  <ResponsiveLine
    data={[
      {
        id: "japan",
        color: "hsl(269, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 72,
          },
          {
            x: "helicopter",
            y: 74,
          },
          {
            x: "boat",
            y: 113,
          },
          {
            x: "train",
            y: 282,
          },
          {
            x: "subway",
            y: 108,
          },
          {
            x: "bus",
            y: 26,
          },
          {
            x: "car",
            y: 224,
          },
          {
            x: "moto",
            y: 247,
          },
          {
            x: "bicycle",
            y: 26,
          },
          {
            x: "horse",
            y: 22,
          },
          {
            x: "skateboard",
            y: 37,
          },
          {
            x: "others",
            y: 45,
          },
        ],
      },
    ]}
    margin={{ right: 50, top: 50, bottom: 50 }}
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
      tickPadding: 20,
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

export default MyResponsiveLine;
