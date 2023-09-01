import blueprintLogo from "../images/blueprint.webp";
import Search from "./Search";

function NavBar({ search, onChangeSearch }) {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src={blueprintLogo}
              className="rounded h-8 mr-3"
              alt="Blueprint Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blueprint Assessment
            </span>
          </div>

          <Search search={search} onChangeSearch={onChangeSearch} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
