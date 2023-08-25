import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };

  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };


const BarChartBox = (props: Props) => {
    return (
        <div className="barChartBox">
            <h1>{props.title}</h1>
            <div>
            <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
            <Tooltip
            contentStyle={{ background:"#2a3447", borderRadius:"5px" }}
            labelStyle={{ display:"none" }}
            cursor={{fill: "none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox