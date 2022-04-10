import { Home } from "../../pages/Home/Home";
import React from "react";
import { Route } from "react-router-dom";
import { Aesthetic } from "../../pages/Aesthetic/Aesthetic";
import { Apparatus } from "../../pages/Apparatus/Apparatus";
import { Biowave } from "../../pages/Biowave/Biowave";
import { Care } from "../../pages/Care/Care";
import { Haircuts } from "../../pages/Haircuts/Haircuts";
import { Injection } from "../../pages/Injection/Injection";
import { Makeup } from "../../pages/Makeup/Makeup";
import { Manicure } from "../../pages/Manicure/Manicure";
import { Massage } from "../../pages/Massage/Massage";
import { Permanent } from "../../pages/Permanent/Permanent";
import { Portfolio } from "../../pages/Portfolio/Portfolio";
import { Solarium } from "../../pages/Solarium/Solarium";
import { Spec } from "../../pages/Spec/Spec";
import { Stainings } from "../../pages/Staining/Staining";
import { Stocks } from "../../pages/Stocks/Stocks";
import { Styling } from "../../pages/Styling/Styling";
import { Therapy } from "../../pages/Therapy/Therapy";
import { Staff } from "../../pages/Staff/Staff";
import { Admin } from "../../pages/Admin/Admin";

export const Routes = () => {
    return (
        <>
            <Route exact path={"/"} component={Home} />
            <Route path={"/portfolio"} component={Portfolio} />
            <Route path={"/stock"} component={Stocks} />
            <Route exact path={"/specialists"} component={Spec} />
            <Route path={"/haircuts"} component={Haircuts} />
            <Route path={"/staining"} component={Stainings} />
            <Route path={"/care"} component={Care} />
            <Route path={"/styling"} component={Styling} />
            <Route path={"/biowave"} component={Biowave} />
            <Route path={"/manicure"} component={Manicure} />
            <Route path={"/makeup"} component={Makeup} />
            <Route path={"/permanentmakeup"} component={Permanent} />
            <Route path={"/massage"} component={Massage} />
            <Route path={"/solarium"} component={Solarium} />
            <Route path={"/endosphere"} component={Therapy} />
            <Route path={"/injectioncosmetology"} component={Injection} />
            <Route path={"/aestheticcosmetology"} component={Aesthetic} />
            <Route path={"/hardwarecosmetology"} component={Apparatus} />
            <Route path={"/admin"} component={Admin} />
            <Staff />
        </>
    );
};
