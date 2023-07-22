import data from "./api/data.json";
import Countries from "./components/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Countries data={data} />} />
                <Route path="/:name" element={<SingleCountry data={data} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
