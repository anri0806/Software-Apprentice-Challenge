import { useState } from "react";
import "./App.css";

import CardsContainer from "./components/CardsContainer";
import { useStandardizedData } from "./customHooks/useStandardizedData";

function App() {
  const [sort, setSort] = useState("All");

  const standardizedData = useStandardizedData();

  function handleSort(value) {
    setSort(value);
  }

  const sortedList = [...standardizedData].sort((a, b) => {
    if (sort === "All") {
      return standardizedData;
    } else if (sort === "Spend") {
      return a.spend - b.spend;
    } else if (sort === "Ascending") {
      return a.campaign.localeCompare(b.campaign);
    } else if (sort === "Descending") {
      return b.campaign.localeCompare(a.campaign);
    }
    return standardizedData;
  });

  // Apply sorted lists

  return (
    <div className="App">
      <div className="App">
        <CardsContainer
          standardizedData={sortedList}
          sort={sort}
          onChangeSort={handleSort}
        />
      </div>
    </div>
  );
}

export default App;
