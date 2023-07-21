import { Route, Routes } from "react-router-dom";
import data from "../api/data.json";

const Countries = () => {
    return (
        <main className="mt-5 flex flex-wrap items-center justify-center gap-10 mx-auto">
            {data.map((country) => {
                return (
                    <div
                        className="shadow-md w-[250px] rounded-lg"
                        key={country.numericCode}
                    >
                        <div>
                            <img
                                className="w-[250px] h-[160px]"
                                src={country.flag}
                                alt={country.name}
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="font-bold mb-5">{country.name}</h2>
                            <h3 className="font-semibold">
                                Population:{" "}
                                <span className="font-light">
                                    {country.population.toLocaleString()}
                                </span>
                            </h3>
                            <h3 className="font-semibold">
                                Region:{" "}
                                <span className="font-light">
                                    {country.region}
                                </span>
                            </h3>
                            <h3 className="font-semibold">
                                Capital:{" "}
                                <span className="font-light">
                                    {country.capital}
                                </span>
                            </h3>
                        </div>
                    </div>
                );
            })}

            <div>
                <Routes>
                    <Route path={`/country/${data.name}`}></Route>
                </Routes>
            </div>
        </main>
    );
};

export default Countries;
