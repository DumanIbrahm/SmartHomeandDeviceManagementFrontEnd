import React from "react";
import { useLocation } from 'react-router-dom';
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";

const Home = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <>
            <Hero />
            <Featured />
            <Recent userId={userId}/>
        </>
    );
};

export default Home;
