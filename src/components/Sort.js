function Sort({ sort, onChangeSort }) {
  return (
    <div className="inline-block relative w-64">
      <label className="inline-block mb-2 mr-2 text-sm font-medium text-gray-900">
        Sort by:
      </label>
      {/* "block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" */}
      <select
        className="inline-block mb-6 bg-white text-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5"
        value={sort}
        onChange={(e) => onChangeSort(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Spend">Spend</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
}

export default Sort;

// Select dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500
