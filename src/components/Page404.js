import React from "react";
import { Nav, NavLink, useLocation } from "react-router-dom";

const Page404 = () => {
  return <div>
    <h1>Page Not Found !!!!</h1>
    <NavLink to='/'>Go To Home Page !!!</NavLink>
  </div>
};

export default Page404;
