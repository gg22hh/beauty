import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Biowave } from "./pages/Biowave/Biowave";
import { Care } from "./pages/Care/Care";
import { Haircuts } from "./pages/Haircuts/Haircuts";
import { Home } from "./pages/Home/Home";
import { Makeup } from "./pages/Makeup/Makeup";
import { Manicure } from "./pages/Manicure/Manicure";
import { Massage } from "./pages/Massage/Massage";
import { Permanent } from "./pages/Permanent/Permanent";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Spec } from "./pages/Spec/Spec";
import { Staff } from "./pages/Staff/Staff";
import { Stainings } from "./pages/Staining/Staining";
import { Stocks } from "./pages/Stocks/Stocks";
import { Styling } from "./pages/Styling/Styling";

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
                <Route path={"/укладки"} component={Styling} />
                <Route path={"/биозавивка"} component={Biowave} />
                <Route path={"/ногтевойсервис"} component={Manicure} />
                <Route path={"/визаж"} component={Makeup} />
                <Route path={"/перманентныймакияж"} component={Permanent} />
                <Route path={"/массаж"} component={Massage} />
                <Staff />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
