import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleCountry = ({ data }) => {
    const { name } = useParams();

    const selectedCountry = data.find((country) => country.name === name);

    return (
        <>
            <Link to="/">
                <button className="m-10 inline-flex items-center gap-4 border-1 bg-white dark:bg-dark-mode-elements dark:text-white rounded-md shadow-md px-4 py-2">
                    <FaArrowLeftLong />
                    Back
                </button>
            </Link>
            <div className="mx-10 md:mx-0 md:flex md:items-center md:justify-between md:h-[60dvh]">
                <section className="grid md:grid-cols-2 md:place-items-center md:gap-10 dark:text-light-mode-elements">
                    <div>
                        <img
                            className="w-[500px] h-[380px]"
                            src={selectedCountry.flag}
                            alt={selectedCountry.name}
                        />
                    </div>
                    <div className="my-8 md:mx-10 md:grid md:grid-rows-[auto] md:grid-cols-2 md:gap-10">
                        <div className="">
                            <h2 className="font-bold text-2xl md:text-4xl">
                                {selectedCountry.name}
                            </h2>
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

                        <div className="md:mt-14 md:mx-10">
                            <h3 className="font-semibold">
                                Top Level Domain:{" "}
                                <span className="font-normal">
                                    {selectedCountry.topLevelDomain}
                                </span>
                            </h3>

                            <h3 className="font-semibold">
                                Currencies:{" "}
                                <span className="font-normal">
                                    {selectedCountry.currencies[0].name}
                                </span>
                            </h3>
                            <h3 className="font-semibold">
                                Languages:{" "}
                                <span className="font-normal">
                                    {selectedCountry.languages.map(
                                        (language, index) => (
                                            <span key={language.name}>
                                                {language.name}
                                                {index <
                                                selectedCountry.languages
                                                    .length -
                                                    1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        )
                                    )}
                                </span>
                            </h3>
                        </div>

                        <div className="font-semibold flex items-center mt-10 md:col-span-2">
                            <h3 className="font-bold">
                                Border Countries:{" "}
                                <Link className="font-semibold inline-flex gap-4 flex-wrap">
                                    {selectedCountry.borders &&
                                        selectedCountry.borders.map(
                                            (border, index) => {
                                                return (
                                                    <button
                                                        key={index}
                                                        className="ml-2 font-normal border-0 rounded-sm py-1 px-8 mt-4 shadow-md dark:outline-none dark:shadow-md dark:bg-dark-mode-elements"
                                                    >
                                                        {border}
                                                    </button>
                                                );
                                            }
                                        )}
                                </Link>
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SingleCountry;
