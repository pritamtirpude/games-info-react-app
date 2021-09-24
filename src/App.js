import React, { useEffect } from "react";
// Page Components
import HomePage from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
