import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage";
import Artifacts from "../Pages/Artifacts";
import AddArtifacts from "../Pages/AddArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import ArtifactDetails from "../Pages/ArtifactDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/artifacts',
                element: <Artifacts></Artifacts>
            },
            {
                path: '/add-artifacts',
                element: <AddArtifacts></AddArtifacts>
            },
            {
                path: '/my-artifacts',
                element: <MyArtifacts></MyArtifacts>
            },
            {
                path: '/liked-artifacts',
                element: <LikedArtifacts></LikedArtifacts>
            },
            {
                path: '/details/:id',
                element: <ArtifactDetails></ArtifactDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;