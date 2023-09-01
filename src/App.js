import { useState } from "react";
import { useStandardizedData } from "./customHooks/useStandardizedData";

import "./App.css";

import CardsContainer from "./components/CardsContainer";
import Sort from "./components/Sort";
import NavBar from "./components/NavBar";

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
      return list.campaign.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className="App">
      <NavBar search={search} onChangeSearch={(item) => setSearch(item)} />
      <div className="app-container">
        <div className="align-sort-icon-list">
          <Sort sort={sort} onChangeSort={(value) => setSort(value)} />
          <div className="icons-list">
            <p>
              <span className="align-middle material-icons">paid</span> Spend
            </p>
            <p>
              <span className="align-middle material-icons">
                volunteer_activism
              </span>{" "}
              Impressions
            </p>
            <p>
              <span className="align-middle material-icons">ads_click</span>{" "}
              Clicks
            </p>
            <p>
              <span className="align-middle material-icons">fact_check</span>{" "}
              Results
            </p>
          </div>
        </div>
        <CardsContainer standardizedData={sortedList} />
      </div>
    </div>
  );
}

export default App;
