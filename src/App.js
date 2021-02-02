import React from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <JobList />
    </div>
  );
}

export default App;
