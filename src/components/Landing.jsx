import { Link, useOutletContext } from "react-router-dom";

const Landing = () => {
    const { visitedAbout } = useOutletContext();

    return (
        <div>
            <h2>Welcome to Home page</h2>
            {visitedAbout ? (
                <div>
                    <p>So, you found nothing? Now came back to the main page:</p>
                    <Link to="/">Main page</Link>
                </div>
            ) : (
                <div>
                    <p className="no-refresh">Do you notice that no refresh occur on navigation?</p>
                    <p>To know about us visit:</p>
                    <Link to="about">About page</Link>
                </div>
            )}

        </div>
    )
};

export default Landing;