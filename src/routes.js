import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import  LoginLayout from "./auth/loginlayout";


import Rewards from "./views/Rewards";
import LoginForm from "./auth/Login";
import RegisterForm from "./auth/Register"
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
 
  {
    path: "/login",
    layout:LoginLayout,
    component: LoginForm
  },
  {
    path: "/register",
    layout:LoginLayout,
    component: RegisterForm
  },
  
  
  {
    path: "/marketplace/rewards/",
    layout: DefaultLayout,
    component: Rewards
  }
];
