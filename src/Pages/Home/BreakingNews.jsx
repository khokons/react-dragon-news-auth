
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
             <Marquee pauseOnHover="true">
              <Link className="mr-8" to="/">I can be a React component</Link>
              <Link className="mr-8" to="/">I can be a React component</Link>
              <Link className="mr-8" to="/">I can be a React component</Link>
                </Marquee>
       
        </div>
    );
};

export default BreakingNews;