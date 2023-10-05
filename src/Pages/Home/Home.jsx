import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSide/RightSideNav";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="border"> 
            <LeftSideNav></LeftSideNav> 
            </div>

            <div className="md:col-span-2 border">
              {
              news.map(anews => <NewsCard key={anews.id} news={anews}></NewsCard> )
              }


                </div>

            <div className="border"> 
            <RightSideNav></RightSideNav>
             </div>


          </div>
        </div>
    );
};

export default Home;