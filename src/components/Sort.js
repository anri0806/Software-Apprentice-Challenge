function Sort({ sort, onChangeSort }) {

  return (
    <div>
      <label>Sort by:</label>
      <select value={sort} onChange={(e) => onChangeSort(e.target.value)}>
        <option value="All">All</option>
        <option value="Spend">Spend</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
}

export default Sort;
