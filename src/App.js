import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Laughing from "./components/Laughing";
import Sleeping from "./components/Sleeping";
import NotSleeping from "./components/NotSleeping";
import Melancholy from "./components/Melancholy";
import Confetti from "./components/Confetti";
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";
import Quiz5 from "./components/Quiz5";
import Quiz6 from "./components/Quiz6";
import Quiz7 from "./components/Quiz7";
import Quiz8 from "./components/Quiz8";
import Quiz9 from "./components/Quiz9";
import Quiz10 from "./components/Quiz10";
import Silly from "./components/Silly";
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path exact="./home" component={Index} />
          <Route path="/laugh" component={Laughing} />
          <Route path="/sleep" component={Sleeping} />
          <Route path="/notsleep" component={NotSleeping} />
          <Route path="/melancholy" component={Melancholy} />
          <Route path="/confetti" component={Confetti} />
          <Route path="/quiz1" component={Quiz1} />
          <Route path="/quiz2" component={Quiz2} />
          <Route path="/quiz3" component={Quiz3} />
          <Route path="/quiz4" component={Quiz4} />
          <Route path="/quiz5" component={Quiz5} />
          <Route path="/quiz6" component={Quiz6} />
          <Route path="/quiz7" component={Quiz7} />
          <Route path="/quiz8" component={Quiz8} />
          <Route path="/quiz9" component={Quiz9} />
          <Route path="/quiz10" component={Quiz10} />
          <Route path="/silly" component={Silly} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
