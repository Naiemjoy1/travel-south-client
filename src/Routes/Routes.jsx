import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TouristsSpot from "../Pages/TouristsSpot";
import AddSpot from "../Pages/AddSpot";
import MyList from "../Pages/MyList";
import PrivateRoute from "../Components/Private/PrivateRoute";
import SpotsHome from "../Pages/SpotsHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/tourspot",
        element: <TouristsSpot></TouristsSpot>,
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
      },
    ],
  },
]);

export default routes;
