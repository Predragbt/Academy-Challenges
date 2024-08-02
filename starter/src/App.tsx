import React from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { DetailsBlock } from "./components/DetailsBlock";
import { PlacesContainer } from "./components/PlacesContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock title="Stories of Adventure" img="/648-500x500.jpg" />
      <PlacesContainer />
      <DetailsBlock title="Popular Adventures" img="/678-500x500.jpg" />
      <Footer />
    </div>
  );
};

export default App;
