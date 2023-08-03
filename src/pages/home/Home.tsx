import "./home.scss";
//import { Link } from "react-router-dom"
import TopBox from "../../components/topBox/TopBox";

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
                </div>

            <div className="box box2">Box2, Total Users</div>
            <div className="box box3">Box3, Total Revenue</div>
            <div className="box box4">Box4, Total Products</div>
            <div className="box box5">Box5, Total Ratio</div>
            <div className="box box6">Box6</div>
            <div className="box box7">Box7</div>
            <div className="box box8">Box8</div>
            <div className="box box9">Box9</div>
        </div>
    )
}

export default Home