import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>

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
