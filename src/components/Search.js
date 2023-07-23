import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = ({ data }) => {
    const [country, setCountry] = useState("");
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        setCountry(data.name);
        reset();
    };

    const reset = () => {
        setCountry("");
    };

    return (
        <div className="sticky top-16 left-0 p-4 bg-light-mode-lements dark:bg-dark-mode-bg">
            <form
                className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between mt-2"
                onSubmit={handleSearchSubmit}
            >
                <label className="py-3 px-4 flex bg-light-mode-bg items-center text-light-mode-input  dark:bg-dark-mode-elements dark:text-light-mode-lements rounded-md shadow-md">
                    <FaMagnifyingGlass />
                    <input
                        className="px-4 w-full text-light-mode-input bg-transparent outline-none dark:text-light-mode-lements"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Search for a country.."
                    />
                </label>
                <div className="relative md:w-1/6 text-light-mode-text">
                    <select
                        className="w-1/2 md:w-full py-3 px-5 rounded-md shadow-md cursor-pointer outline-none
                        text-light-mode-text dark:text-light-mode-lements bg-light-mode-lements dark:bg-dark-mode-elements"
                        name="filter"
                        id="filter"
                    >
                        <option>Filter by Region</option>
                        {regions.map((region) => {
                            return (
                                <option key={region} value={region}>
                                    {region}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </form>
        </div>
    );
};
