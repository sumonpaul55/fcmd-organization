import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/homePage/Home";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogs/blogDetails/BlogDetails";
import AboutUs from "../pages/aboutUs/AboutUs";
import AdminPanel from "../pages/dashboard/adminPanel/AdminPanel";
import Volunteer from "../pages/dashboard/adminPanel/Volunteer";
import BloodDoner from './../pages/dashboard/adminPanel/BloodDoner';
import BloodDonnationForm from "../pages/bloodDonationForm/BloodDonnationForm";
import UpCommingEvent from "../pages/upCommingEvent/UpCommingEvent";
import LastEvent from "../pages/lastEvent/LastEvent";
import EventDetails from "../pages/eventDetails/EventDetails";
import Registration from "../pages/registration/Registration";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog-details/:id",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/admin-panel",
                element: <AdminPanel></AdminPanel>
            },
            {
                path: "/volunteer",
                element: <Volunteer></Volunteer>
            },
            {
                path: "/blood-doner",
                element: <BloodDoner></BloodDoner>
            },
            {
                path: "/bloodDonation-form",
                element: <BloodDonnationForm></BloodDonnationForm>
            },
            {
                path: "/upcomming-events",
                element: <UpCommingEvent></UpCommingEvent>
            },
            {
                path: "/last-events",
                element: <LastEvent></LastEvent>
            },
            {
                path: "/event-details",
                element: <EventDetails></EventDetails>
            },
            {
                path: "/photo-gallery",
                element: <PhotoGallery></PhotoGallery>
            }
        ],
    },
    {
        path: "/registration",
        element: <Registration />
    }
]);

export default router