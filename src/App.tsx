import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>

      {/*
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      =*/}
    </div>
  );
}

export default App;
