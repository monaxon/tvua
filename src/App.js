import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faKey,
  faPlus,
  faEdit,
  faMinus,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import "styles/App.css";

library.add(faUser, faKey, faPlus, faEdit, faMinus, faSignInAlt, faSignOutAlt);

const LoginPage = lazy(() => import("pages/Login"));
const AbsencePage = lazy(() => import("pages/Absence"));
const NotFound = lazy(() => import("pages/NotFound"));
const history = require("history").createBrowserHistory();

function mapStateToProps(state) {
  return {
    APIToken: state.APIToken,
    Route: state.Route
  };
}

function App(props) {
  useEffect(() => {
    if (props.APIToken !== "") {
      history.push(props.Route);
    } else {
      history.push("/login");
    }
  }, [props.APIToken, props.Route]);

  return (
    <BrowserRouter>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              component={() => {
                return (
                  <Suspense fallback={<p>در حال بارگذاری...</p>}>
                    <LoginPage />
                  </Suspense>
                );
              }}
            />
            <Route
              exact
              path="/absence"
              component={() => {
                return (
                  <Suspense fallback={<p>در حال بارگذاری...</p>}>
                    <AbsencePage />
                  </Suspense>
                );
              }}
            />
            <Route
              path="/*"
              component={() => {
                return (
                  <Suspense fallback={<p>در حال بارگذاری...</p>}>
                    <NotFound />
                  </Suspense>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
