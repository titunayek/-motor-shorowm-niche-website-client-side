import React from 'react';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Exports from '../Exports/Exports';
import Servises from '../Services/Servises';



const Home = () => {
    return (
        <div id="home">

            <Banner/>
            <Servises/>
            <Exports/>
            <Footer></Footer>
        </div>
    );
};

export default Home;