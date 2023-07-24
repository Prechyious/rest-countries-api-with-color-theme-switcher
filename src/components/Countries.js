import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Link } from "react-router-dom";

const Countries = ({ data }) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const res = data.map((country) => country);
        setCountries(res);
        setFiltered(res);
        setIsLoading(false);
    }, [data]);

    const searchCountry = (searchValue) => {
        setSearchInput(searchValue);

        if (searchInput) {
            const filteredCountries = countries.filter((country) => {
                return Object.values(country)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setFiltered(filteredCountries);
        } else {
            setFiltered(countries);
        }
    };

    const handleFilterByRegion = (selectedRegion) => {
        if (selectedRegion) {
            const filteredCountries = countries.filter(
                (country) => country.region === selectedRegion
            );
            setFiltered(filteredCountries);
        } else {
            setFiltered(countries);
        }
    };

    return (
        <>
            <Search
                searchCountry={searchCountry}
                searchInput={searchInput}
                filterByRegion={handleFilterByRegion}
            />
            {isLoading ? (
                <h1 className="flex items-center justify-center h-[50dvh] text-2xl uppercase font-bold text-center animate-pulse">
                    Loading...
                </h1>
            ) : (
                <main
                    className="mt-5 flex flex-wrap items-center justify-center gap-10 md:gap-20 
                bg-light-mode-bg dark:bg-dark-mode-bg dark:text-light-mode-elements
                text-light-mode-text"
                >
                    {filtered.map(
                        ({ name, flag, population, region, capital }) => {
                            return (
                                <Link
                                    className="border-1 border-red-500"
                                    to={`/${name}`}
                                    key={name}
                                >
                                    <div className="shadow-md w-[260px] rounded-xl cursor-pointer overflow-hidden bg-light-mode-elements dark:bg-dark-mode-elements hover:shadow-xl transition-all duration-300 ease-in-out">
                                        <div className="w-full">
                                            <img
                                                className="w-[270px] h-[170px]"
                                                src={flag}
                                                alt={name}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h2 className="font-bold mb-5">
                                                {name}
                                            </h2>
                                            <h3 className="font-semibold">
                                                Population:{" "}
                                                <span className="font-light">
                                                    {population.toLocaleString()}
                                                </span>
                                            </h3>
                                            <h3 className="font-semibold">
                                                Region:{" "}
                                                <span className="font-light">
                                                    {region}
                                                </span>
                                            </h3>
                                            <h3 className="font-semibold">
                                                Capital:{" "}
                                                <span className="font-light">
                                                    {capital}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    )}
                </main>
            )}
        </>
    );
};

export default Countries;
