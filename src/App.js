import NavBar from "./components/NavBar";
import { Search } from "./components/Search";
import data from "./api/data.json";
import Countries from "./components/Countries";

const App = () => {
    return (
        <div>
            <NavBar />
            <Search data={data} />
            <Countries data={data} />
        </div>
    );
};

export default App;
