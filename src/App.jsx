import React, { useState } from "react";
import './Log_reg.css';
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const renderForm = () => {
    if (currentForm === 'login') {
      return <Login onFormSwitch={toggleForm} />;
    } else {
      return <Register onFormSwitch={toggleForm} />;
    }
  }

  return (
    <div className="App">
      {renderForm()}
    </div>
  );
}

export default App;
