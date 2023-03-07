import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const PrivateRoute = () => {
    const auth = false
    return (<>
        <Navbar />
        {auth ? <Outlet /> : <Navigate to="/auth-error" />}
    </>
    )
};

export default PrivateRoute;
