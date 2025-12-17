import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the main page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
