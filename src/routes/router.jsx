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
import Adminroute from "./Adminroute";
import GalleryCards from "../gallery/GalleryCards";
import EventsCard from "../eventRoutes/EventsCard";

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
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
      },
      {
        path: "/event/:id",
        element: <EventsCard></EventsCard>,
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <GalleryCards></GalleryCards>
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery/:id",
        element: <Gallery></Gallery>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Adminroute>
        <Dashboard></Dashboard>
      </Adminroute>
    ),
    children: [
      {
        path: "/dashboard/add-events",
        element: (
          <Adminroute>
            <AddEvents></AddEvents>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/add-photos-gallery",
        element: (
          <Adminroute>
            <AddEventsGallery></AddEventsGallery>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/manage-events",
        element: (
          <Adminroute>
            <ManageEvents></ManageEvents>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/manage-events-gallery",
        element: (
          <Adminroute>
            <ManageGallery></ManageGallery>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <Adminroute>
            <AllUsers></AllUsers>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/manage-events/edit-event/:id",
        element: (
          <Adminroute>
            <EditEvent></EditEvent>
          </Adminroute>
        ),
      },
    ],
  },
]);

export default router;
