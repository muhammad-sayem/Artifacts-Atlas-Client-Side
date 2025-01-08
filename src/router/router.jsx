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
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute>
                    <AddArtifacts></AddArtifacts>
                </PrivateRoute>
            },
            {
                path: '/my-artifacts',
                element: <PrivateRoute>
                    <MyArtifacts></MyArtifacts>
                </PrivateRoute>
            },
            {
                path: '/liked-artifacts',
                element: <PrivateRoute>
                    <LikedArtifacts></LikedArtifacts>
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <ArtifactDetails></ArtifactDetails>
                </PrivateRoute>
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