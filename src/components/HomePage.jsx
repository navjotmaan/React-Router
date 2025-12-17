import { Outlet } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
    const [visitedAbout, setVisitedAbout] = useState(false);

    return <Outlet context={{visitedAbout, setVisitedAbout}}/>
    
};

export default HomePage;