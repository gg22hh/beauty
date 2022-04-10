import { Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes } from "./components/Routes/Routes";
import { useScrollToTop } from "./shared/hooks";

function App() {
    useScrollToTop();

    return (
        <div className="App">
            <Header />
            <Switch>
                <Routes />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
