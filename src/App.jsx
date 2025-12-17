import './styles/App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
  <div>
      <h1>Hello from the main page of the app!</h1>
      <p>This is a small app build with React Router. You can visit different pages by clicking links without refreshing the page. </p>
      <p>To see it in action click the link below to visit home page:</p>
      <Link to="/homepage">Home page</Link>
    </div>
  )
};

export default App;