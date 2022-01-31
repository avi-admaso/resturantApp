import logo from "./logo.svg";
import "./App.css";

import AppRouter from "./AppRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <section className="Appp" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><AppRouter/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </section>
  );
}

export default App;
