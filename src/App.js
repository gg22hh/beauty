import "./App.scss";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Services } from "./components/Services/Services";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Services />
        </div>
    );
}

export default App;
