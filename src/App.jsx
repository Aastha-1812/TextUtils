import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

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
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454F";
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <NavBar
        title="TextUtils"
        aboutText="About Us"
        DMode={mode}
        changeMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route */}
      {/* exact */}
      {/* /  path="/" */}
      {/* element={ */}
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze"
        Mode={mode}
      />
      {/* } */}
      {/* /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
