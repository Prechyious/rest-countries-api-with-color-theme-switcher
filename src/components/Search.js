import { useState } from "react";
import { FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";

export const Search = ({ data }) => {
    const [country, setCountry] = useState("");
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        setCountry(data.name);
        reset();
    };

    const reset = () => {
        setCountry("");
    };

    return (
        <div className="sticky top-16 left-0 bg-light-mode-bg m-5">
            <form
                className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between mt-2"
                onSubmit={handleSearchSubmit}
            >
                <label className="py-3 px-4 flex text-light-mode-input items-center bg-white rounded-md shadow-md">
                    <FaMagnifyingGlass />
                    <input
                        className="px-4 w-full bg-transparent outline-none"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Search for a country.."
                    />
                </label>

                <div className="relative md:w-1/6">
                    <select
                        className="w-1/2 md:w-full py-3 px-6 rounded-md shadow-md cursor-pointer appearance-none outline-none"
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
                    <div className="absolute inset-y-0 left-40 flex items-center pl-3 pointer-events-none md:left-40 md:">
                        <FaAngleDown />
                    </div>
                </div>
            </form>
        </div>
    );
};
