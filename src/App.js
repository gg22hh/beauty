import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Care } from "./pages/Care/Care";
import { Haircuts } from "./pages/Haircuts/Haircuts";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Spec } from "./pages/Spec/Spec";
import { Staff } from "./pages/Staff/Staff";
import { Stainings } from "./pages/Staining/Staining";
import { Stocks } from "./pages/Stocks/Stocks";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/портфолио"} component={Portfolio} />
                <Route path={"/акции"} component={Stocks} />
                <Route exact path={"/специалисты"} component={Spec} />
                <Route path={"/стрижки"} component={Haircuts} />
                <Route path={"/окрашивание"} component={Stainings} />
                <Route path={"/уход"} component={Care} />
                <Staff />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
