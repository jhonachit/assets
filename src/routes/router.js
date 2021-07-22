import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ComponentsView, ComponentView, LayersView, PlatformsView, SwaggerView, HomeView } from "../views";

export default function RouterApp() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/components" component={ComponentsView} />
        <Route exact path="/component/:idComponent" component={ComponentView} />
        <Route exact path="/component" component={ComponentView} />
        <Route exact path="/swagger/:idComponent" component={SwaggerView} />
        
        <Route exact path="/layers" component={LayersView} />
        <Route exact path="/platforms" component={PlatformsView} />
      </Switch>
    </Router>
  );
}
