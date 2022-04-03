import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/portfolio"} component={Portfolio} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
