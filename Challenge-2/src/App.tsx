import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Footer />
    </>
  );
}

export default App;
