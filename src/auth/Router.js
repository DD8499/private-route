import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Page404 from '../components/Page404'
import PrivateRoute from '../components/privateComponents/PrivateRoute'
import AuthRouteError from '../components/privateComponents/AuthRouteError'
import Layout from "../components/Layout";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<Page404 />} />
                <Route path="auth-error" element={<AuthRouteError />} />
            </Route>
        </Routes>
    )
};

export default Router;
