import React from "react";
import "./App.css";

// Imporat FAQ Data
import { accordionData } from "./utils/data";

// Import Pages
import FAQ from "./components/FAQ/FAQ";

function App() {
  return <FAQ items={accordionData} />;
}

export default App;
