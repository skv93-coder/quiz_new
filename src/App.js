import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import "./App.css";
import Quizstate from "./context/quizState/QuizStatet";
import User from "./User";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Quizstate>
          <Switch>
            <Route path="/user" component={User} />
            <Route component={Admin} />
          </Switch>
        </Quizstate>
      </BrowserRouter>
    </div>
  );
}

export default App;
