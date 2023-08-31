import "./home.scss";
//import { Link } from "react-router-dom"
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from "../../data";
import BigChartBox from "../../components/bigChartBox/BigChartBox";


const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
                </div>

            <div className="box box2"><ChartBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4"><PieChartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    )
}

export default Home