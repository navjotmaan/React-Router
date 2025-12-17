import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

const About = () => {
    const { setVisitedAbout } = useOutletContext();

    useEffect(() => {
        setVisitedAbout(true);
    }, [setVisitedAbout]);

    return (
        <div>
            <h3>Oh! you came here from home page to know about us</h3>
            <p>But there's nothing to know about us!</p>
            <Link to="/homepage">Go back to Home page</Link>
        </div>
    )
}

export default About;