import "./App.css";
import CardsContainer from "./components/CardsContainer";
import { useStandardizedData } from "./customHooks/useStandardizedData";

function App() {
  const standardizedData = useStandardizedData();

  return (
    <div className="App">
      <div className="App">
        <CardsContainer standardizedData={standardizedData} />
      </div>
    </div>
  );
}

export default App;
