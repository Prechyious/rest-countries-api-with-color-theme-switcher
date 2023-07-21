import { useState } from "react";

export const Search = ({ data }) => {
    const [country, setCountry] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        setCountry(data.name);
        reset();
    };

    const reset = () => {
        setCountry("");
    };

    const getUniqueRegions = () => {
        const uniqueRegions = data.reduce((acc, continent) => {
            if (!acc.includes(continent.region)) {
                acc.push(continent.region);
            }
            return acc;
        }, []);
        return uniqueRegions.sort();
    };

    return (
        <div className="sticky top-16 left-0 bg-light-mode-bg">
            <form
                className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between mt-2 p-5"
                onSubmit={handleSearchSubmit}
            >
                <input
                    className="py-2 px-4 rounded-md shadow-md"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Search for a country.."
                />

                <select
                    className="w-1/2 md:w-[unset] py-2 px-4 rounded-md shadow-md"
                    name="filter"
                    id="filter"
                >
                    <option value="">Filter by region</option>
                    {getUniqueRegions().map((region) => {
                        return (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        );
                    })}
                </select>
            </form>
        </div>
    );
};
