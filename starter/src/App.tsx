import React from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { DetailsBlock } from "./components/DetailsBlock";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock
        title="Stories of Adventure"
        img="../public/648-500x500.jpg"
      />
      <DetailsBlock
        title="Popular Adventures"
        img="../public/678-500x500.jpg"
      />
      <Footer />
    </div>
  );
};

export default App;
