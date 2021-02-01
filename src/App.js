import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import {Page4}from "./views/create-rewards-4";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
            <Switch>
              <Route exact path ="/">
                <Redirect to ="/login"/>
              </Route>
              <Route  path ="/login">
                <LoginLayout>
                  <LoginForm/></LoginLayout>
              </Route>
              <Route  path ="/register">
                
              <LoginLayout><RegisterForm/></LoginLayout>
              </Route>
              <Route path="/create-rewards-1">
                <DefaultLayout>
                {localStorage.getItem("token")? <Page1 /> : <Redirect to="/login" />}
                </DefaultLayout>
                </Route>
                <Route path="/create-rewards-4">
                <DefaultLayout>
                {localStorage.getItem("token")? <Page4 /> : <Redirect to="/login" />}
                </DefaultLayout>
                </Route>
                <Route path="/create-rewards-2">
                <DefaultLayout>
                {localStorage.getItem("token")? <Page2 /> : <Redirect to="/login" />}
                </DefaultLayout>
                </Route>
                <Route path="/create-rewards-3">
                <DefaultLayout>
                {localStorage.getItem("token")? <Page3 /> : <Redirect to="/login" />}
                </DefaultLayout>
                </Route>
                <Route path="/marketplace/rewards/">
                <DefaultLayout>
                {localStorage.getItem("token")? <Rewards /> : <Redirect to="/login" />}
                </DefaultLayout>
              </Route>
              <Route path="/marketplace/bank/">
                <BankLayout>
                {localStorage.getItem("token") ? <Bank/> : <Redirect to="/login" />}</BankLayout>
              </Route>
              </Switch>
         
    </div>
  </Router>
);
