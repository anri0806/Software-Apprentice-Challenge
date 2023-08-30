function Search({ search, onChangeSearch }) {
  return (
    <div>
        <input
          value={search}
          onChange={(e) => onChangeSearch(e.target.value)}
          name="search"
          type="text"
          placeholder="Search campaign"
        />
    </div>
  );
}

export default Search;
