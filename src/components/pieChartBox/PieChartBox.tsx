import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"


const data = [
    { name: 'Group A', value: 400, color: '#0088FE' },
    { name: 'Group B', value: 300, color: '#00C49F' },
    { name: 'Group C', value: 300, color: '#FFBB28' },
    { name: 'Group D', value: 200, color: '#FF8042' },
  ];


const PieChartBox = () => {
    return (
    <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
        <PieChart>
            <Tooltip
                contentStyle={{background: "white", borderRadius: "5px"}}
            />
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
            {data.map((item) => (
                <Cell
                 key={item.name}
                  fill={item.color} 
                />
            ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
    </div>
    )
}

export default PieChartBox