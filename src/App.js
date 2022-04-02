import "./App.scss";
import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Header } from "./components/Header/Header";
import { Services } from "./components/Services/Services";
import { Welcome } from "./components/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Services />
            <Benefits />
            <Welcome />
        </div>
    );
}

export default App;
