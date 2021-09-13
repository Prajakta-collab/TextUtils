import { useState } from "react";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import Alert from "./componets/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#495057";
      showAlert("Dark mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled !", "success");
    }
  };

  return (
    <>   <Router>
      <Navbar title="TextUtils" About={About} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
   
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/">
              <TextForm my-3 mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
