import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header";
import HomePage from "./pages/homepage";
import Categories from "./pages/categories/Categories";
import Playlists from "./pages/categories/Playlists";
import search from "./pages/search";
import Player from "./components/player";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:id" component={Playlists} />
        <Route path="/search/:query" component={search} />
      </Switch>
      <Player />
    </div>
  );
}

export default App;
