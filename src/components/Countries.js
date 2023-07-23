import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Link } from "react-router-dom";

const Countries = ({ data }) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [filtered, setFiltered] = useState("");

    const getCountries = () => {
        const res = data.map((country) => country);
        setCountries(res);
    };

    useEffect(() => {
        getCountries();
        setIsLoading(false);
    }, [countries, isLoading]);

    return (
        <>
            <Search />
            {isLoading ? (
                <h1 className="flex items-center justify-center h-[50dvh] text-2xl uppercase font-bold text-center animate-pulse">
                    Loading...
                </h1>
            ) : (
                <main className="mt-5 flex flex-wrap items-center justify-center gap-10 mx-auto dark:bg-dark-mode-bg">
                    {countries.map(
                        ({ name, flag, population, region, capital }) => {
                            return (
                                <Link to={`/${name}`} key={name}>
                                    <div className="shadow-md w-[250px] rounded-xl cursor-pointer overflow-hidden bg-light-mode-lements dark:bg-dark-mode-elements hover:shadow-xl transition-all duration-300 ease-in-out">
                                        <div>
                                            <img
                                                className="w-[260px] h-[160px]"
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
