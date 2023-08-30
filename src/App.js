import { useState } from "react";
import { useStandardizedData } from "./customHooks/useStandardizedData";

import "./App.css";

import CardsContainer from "./components/CardsContainer";
import Sort from "./components/Sort";
import Search from "./components/Search";

function App() {
  const [sort, setSort] = useState("All");
  const [search, setSearch] = useState("");

  const standardizedData = useStandardizedData();

  const sortedList = [...standardizedData]
    .sort((a, b) => {
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
    })
    .filter((list) => {
      return list.campaign.toLowerCase().includes(search.toLowerCase())
    });

  return (
    <div className="App">
      <Search search={search} onChangeSearch={(item) => setSearch(item)} />
      <Sort sort={sort} onChangeSort={(value) => setSort(value)} />
      <CardsContainer standardizedData={sortedList} />
    </div>
  );
}

export default App;
