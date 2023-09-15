import "./reset.css";
import "./style.css";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import TopSection from "./Components/TopSection";
import { data } from "./assets/fma-data";

function App() {
  return (
    <>
      <Header />
      <TopSection characters={data} />
      <Card characters={data} />
    </>
  );
}

export default App;
