import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

import Changemaker from "../Change-maker/Changemaker";
import Featureitems from "../Featured-items/Featureditems";
import SwaipingCategory from "../swaping-category/SwaipingCategory";



const Home = () => {
    return (
        <div>
            
            <Helmet>
                <title>Grocery Shop | Home</title>
            </Helmet>
            <Banner></Banner>
            <SwaipingCategory></SwaipingCategory>
            <Featureitems></Featureitems>
            <Changemaker></Changemaker>
           
        </div>
    );
};

export default Home;