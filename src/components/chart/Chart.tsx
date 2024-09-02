import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props: any) {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: { label: string; value: number }) => dataPoint.value,
  );
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: {label: string, value: number}) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
