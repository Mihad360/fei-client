import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import AddEvents from "../dashboardRoutes/AddEvents";
import ManageEvents from "../dashboardRoutes/ManageEvents";
import Events from "../eventRoutes/Events";
import EditEvent from "../dashboardRoutes/EditEvent";
import AddEventsGallery from "../dashboardRoutes/AddEventsGallery";
import ManageGallery from "../dashboardRoutes/ManageGallery";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../dashboardRoutes/AllUsers";
import Gallery from "../gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <PrivateRoute><Events></Events></PrivateRoute>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/add-events",
        element: <AddEvents></AddEvents>,
      },
      {
        path: "/dashboard/add-photos-gallery",
        element: <AddEventsGallery></AddEventsGallery>
      },
      {
        path: "/dashboard/manage-events",
        element: <ManageEvents></ManageEvents>,
      },
      {
        path: "/dashboard/manage-events-gallery",
        element: <ManageGallery></ManageGallery>
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>
      },
      {
        path: "/dashboard/manage-events/edit-event/:id",
        element: <EditEvent></EditEvent>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },
    ],
  },
]);

export default router;
