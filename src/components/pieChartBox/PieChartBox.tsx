import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

//define our values that we will pass to the pie chart
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
                    {data.map((item) => (
                        <Tooltip
                          contentStyle={{backgroundColor: item.color, borderRadius: "5px"}}
                         />
                    ))}
                    
                    <Pie
                        data={data} //passing in our values via 'data'
                        // cx={120} //x position, remove to center
                        // cy={200} //y position, remove to center
                        innerRadius={'70%'} //has to be less than the outer or will be out of bounds and won't display
                        outerRadius={'90%'} //has to be greater than inner or will be out of bounds and won't display
                        // fill="#8884d8" //fill is already dictated by our 'data' values above.
                        paddingAngle={5} //space between pie pieces
                        dataKey="value" //taken from data.value value
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


        
        <div className="options">
            {data.map(item=>(
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{ backgroundColor: item.color }} />
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
            
            </div>
        <div className="test">underneath</div>
    </div>
    )
}

export default PieChartBox




{/* <div className="options">
                {data.map(item=> (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" />
                            <span>{item.name}</span>
                        </div>
                    </div>
                    ))}
            </div>
        </div> */}