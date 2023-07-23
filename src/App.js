import data from "./api/data.json";
import Countries from "./components/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="bg-light-mode-bg dark:bg-dark-mode-bg text-light-mode-text dark:text-light-mode-lements">
                <Routes>
                    <Route path="/" element={<Countries data={data} />} />
                    <Route
                        path="/:name"
                        element={<SingleCountry data={data} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
