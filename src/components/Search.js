import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = ({ searchCountry, searchInput, filterByRegion }) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    return (
        <div className="sticky top-16 left-0 p-4 bg-light-mode-bg dark:bg-dark-mode-bg z-[1] flex justify-between gap-5 flex-col md:items-start md:flex-row">
            <label className="py-3 px-4 flex bg-light-mode-bg items-center text-light-mode-input dark:bg-dark-mode-elements dark:text-light-mode-elements rounded-md shadow-md cursor-pointer">
                <FaMagnifyingGlass />
                <input
                    className="px-4 w-full text-light-mode-input bg-transparent outline-none dark:text-light-mode-elements"
                    type="search"
                    name="search"
                    value={searchInput}
                    onChange={(e) => searchCountry(e.target.value)}
                    placeholder="Search for a country.."
                />
            </label>
            <div className="relative md:w-1/6 text-light-mode-text">
                <select
                    className="w-1/2 md:w-full py-3 px-5 rounded-md shadow-md cursor-pointer outline-none
                        text-light-mode-text dark:text-light-mode-elements bg-light-mode-bg dark:bg-dark-mode-elements"
                    name="filter"
                    id="filter"
                    onChange={(e) => filterByRegion(e.target.value)}
                >
                    <option value="">Filter by Region</option>
                    {regions.map((region) => {
                        return (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};
