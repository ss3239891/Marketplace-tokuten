import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import BankLayout  from "./layouts/BankLayout";
import  LoginLayout from "./auth/loginlayout";


import Rewards from "./views/Rewards";
import LoginForm from "./auth/Login";
import RegisterForm from "./auth/Register"
import Bank from "./views/Bank"
import { Page1 } from "./views/create-rewards-first";
import { Page2 } from "./views/create-rewards-2";
import {Page3 }from "./views/create-rewards-3";
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
  },
  {
    path: "/create-rewards-1/",
    layout: DefaultLayout,
    component: Page1
  },
  {
    path: "/create-rewards-3/",
    layout: DefaultLayout,
    component: Page3
  },
  {
    path: "/create-rewards-2/",
    layout: DefaultLayout,
    component: Page2
  },
  {
    path: "/marketplace/Bank/",
    layout: BankLayout,
    component: Bank
  }
];
