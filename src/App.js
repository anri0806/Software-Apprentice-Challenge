import { useEffect } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/fakeDataSet")
      .then((res) => res.json())
      .then((fetchedData) => console.log(fetchedData));

  },[]);

  return (
    <div className="App">
      <div className="App">
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
