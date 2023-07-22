import { Search } from "./Search";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Countries = ({ data }) => {
    return (
        <>
            <NavBar />
            <Search />
            <main className="mt-5 flex flex-wrap items-center justify-center gap-10 mx-auto">
                {data.map((country) => {
                    return (
                        <Link to={`/${country.name}`}>
                            <div
                                className="shadow-md w-[250px] rounded-xl cursor-pointer overflow-hidden"
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
                                    <h2 className="font-bold mb-5">
                                        {country.name}
                                    </h2>
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
                        </Link>
                    );
                })}
            </main>
        </>
    );
};

export default Countries;
