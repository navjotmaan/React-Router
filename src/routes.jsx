import App from './App'
import HomePage from './components/HomePage';
import About from './components/About';
import Landing from './components/Landing'
import ErrorPage from './components/ErrorPage'

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "homepage",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;

