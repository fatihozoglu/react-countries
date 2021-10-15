import Nav from "./components/Nav";
import Main from "./components/Main";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`"app" ${theme ? "app-dark" : "app-light"}`}>
      <Nav />
      <Switch>
        <Route path="/:code">
          <Detail />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
