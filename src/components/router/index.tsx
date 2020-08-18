import * as React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { DashboardPage } from "../pages/dashboard-page";
import { EventDetailPage } from "../pages/event-detail-page";

export const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/event/:id" component={EventDetailPage} />
                </Switch>
            </>
        </BrowserRouter>
    );
};
