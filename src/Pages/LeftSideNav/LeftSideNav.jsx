import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])


    return (
        <div>
            <h2 className="text-2xl">All Categories</h2> 

            {
                categories.map(category => <Link 
                    key={category.id}
                    className="block mt-5 ml-4">
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;

