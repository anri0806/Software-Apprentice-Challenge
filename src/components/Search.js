function Search({ search, onChangeSearch }) {
  return (
    <div className="relative m-auto mb-4 flex w-full flex-wrap">
      <div className="m-auto">
        <input
          id="search-input"
          className="relative block w-96 rounded-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding px-5 py-[0.65rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          value={search}
          onChange={(e) => onChangeSearch(e.target.value)}
          name="search"
          type="search"
          placeholder="Search by campaign name"
        />
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Search;