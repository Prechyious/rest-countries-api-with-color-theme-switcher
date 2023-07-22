import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleCountry = ({ data }) => {
    const { name } = useParams();

    const selectedCountry = data.find((country) => country.name === name);
    console.log(selectedCountry.borders);
    return (
        <div>
            <NavBar />

            <Link to="/">
                <button className="m-10 inline-flex items-center gap-4 border-1 bg-white rounded-md shadow-md px-4 py-2">
                    <FaArrowLeftLong />
                    Back
                </button>
            </Link>

            <section className="m-10 grid md:grid-cols-3 md:place-items-center">
                <div>
                    <img
                        className="w-[300px] h-[220px]"
                        src={selectedCountry.flag}
                        alt=""
                    />
                </div>
                <div className="my-8 md:ml-10">
                    <h2 className="font-bold">{selectedCountry.name}</h2>
                    <h3 className="mt-5 font-semibold">
                        Native Name:{" "}
                        <span className="font-normal">
                            {selectedCountry.nativeName}
                        </span>
                    </h3>
                    <h3 className="font-semibold">
                        Population:{" "}
                        <span className="font-normal">
                            {selectedCountry.population.toLocaleString()}
                        </span>
                    </h3>
                    <h3 className="font-semibold">
                        Region:{" "}
                        <span className="font-normal">
                            {selectedCountry.region}
                        </span>
                    </h3>
                    <h3 className="font-semibold">
                        Sub Region:{" "}
                        <span className="font-normal">
                            {selectedCountry.subregion}
                        </span>
                    </h3>
                    <h3 className="font-semibold">
                        Capital:{" "}
                        <span className="font-normal">
                            {selectedCountry.capital}
                        </span>
                    </h3>
                </div>
                <div className="md:-mt-6">
                    <h3 className="font-semibold">
                        Top Level Domain:{" "}
                        <span className="font-normal">
                            {selectedCountry.topLevelDomain}
                        </span>
                    </h3>

                    <h3 className="font-semibold">
                        Currencies: {selectedCountry.currencies[0].code}
                    </h3>
                    <h3 className="font-semibold">
                        Languages:{" "}
                        <span className="font-normal">
                            {selectedCountry.languages.map(
                                (language) => language.name
                            )}
                        </span>
                    </h3>
                </div>

                <div className="font-semibold flex items-center mt-10">
                    <h3 className="font-bold">
                        Border Countries:{" "}
                        <Link className="font-semibold inline-flex gap-2 flex-wrap">
                            {selectedCountry.borders.map((border) => {
                                return (
                                    <button className="border py-1 px-6 mt-4 shadow-md">
                                        {border}
                                    </button>
                                );
                            })}
                        </Link>
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default SingleCountry;
