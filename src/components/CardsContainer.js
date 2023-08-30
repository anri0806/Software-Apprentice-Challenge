import { useState } from "react";
import Card from "./Card";

function CardsContainer({ standardizedData, sort, onChangeSort }) {
  const card = standardizedData.map((data) => (
    <Card
      key={`${data.campaign} + _ + ${data.creative} + _ + ${data.platform}`}
      data={data}
    />
  ));

  return (
    <div>
      <label>Sort by:</label>
      <select value={sort} onChange={(e) => onChangeSort(e.target.value)}>
        <option value="All">All</option>
        <option value="Spend">Spend</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      {card}
    </div>
  );
}

export default CardsContainer;
