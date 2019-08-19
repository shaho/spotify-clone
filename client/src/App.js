import React from "react";
// import { createBrowserHistory } from "history";
// import { Switch, Route, Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/homepage";
import search from "./pages/search";

function App() {
  // const customHistory = createBrowserHistory();
  return (
    <div className="App">
      <Header />
      {/* <Router history={customHistory}> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/:query" component={search} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
