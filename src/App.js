import React from "react";
import "./AppColours.css";
import "./App.css";

import MainDataContext from "./data/MainDataContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import RegularEvent from "./pages/RegularEvent";
// import PastEvents from "./pages/PastEvents";
// import PastEvent from "./pages/PastEvent";
import Drinks from "./pages/Drinks";
// import Jobs from "./pages/Jobs";
// import Job from "./pages/Job";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

function App() {
  return (
    <MainDataContext>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/events" exact>
            <Events />
          </Route>

          <Route path="/events/:event_id">
            <Event />
          </Route>

          <Route path="/regularevents/:event_id">
            <RegularEvent />
          </Route>

          {/* <Route path="/pastevents" exact>
            <PastEvents />
          </Route> */}

          {/* <Route path="/pastevents/:past_event_id">
            <PastEvent />
          </Route> */}

          <Route path="/drinks">
            <Drinks />
          </Route>

          {/* <Route path="/jobs" exact>
            <Jobs />
          </Route> */}

          {/* <Route path="/jobs/:job_id">
            <Job />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </MainDataContext>
  );
}

export default App;
