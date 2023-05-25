import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import type { RouteType, RouteDef } from "../interfaces";
import { Roles } from "../interfaces";
import { PrivateRoute, PublicRoute } from ".";
import { 
    CSSPage, 
    ReactPage, 
    PatternsPage, 
    HomePage,
    PersonalPage,
    SecretPage,
    BackendPage,
    MethodologiesPage
} from "../pages";

const publicRoutes: RouteDef[] = [
    {
        to: "/",
        path: "/",
        Component: HomePage,
        name: "Home"
    },
    {
        to: "/CSS",
        path: "CSS",
        Component: CSSPage,
        name: "CSS"
    },
    {
        to: "/React",
        path: "React",
        Component: ReactPage,
        name: "React"
    },
    {
        to: "/Patterns",
        path: "Patterns",
        Component: PatternsPage,
        name: "Patterns"
    },
    {
        to: "/Backend",
        path: "Backend",
        Component: BackendPage,
        name: "Backend"
    },
    {
        to: "/Methodologies",
        path: "Methodologies",
        Component: MethodologiesPage,
        name: "Methodologies"
    }
];

const privateRoutes: RouteDef[] = [
    {
        to: "/Personal",
        path: "Personal",
        Component: PersonalPage,
        name: "Personal",
        params: { rolesAllowed: [Roles.cat_lover] }
    },
    {
        to: "Secret",
        path: "/Personal/Secret",
        Component: SecretPage,
        name: "Secret",
        params: { rolesAllowed: [Roles.cat_lover] }
    }
];

const wildCardRoute: RouteDef[] = [
    {
        to: "*",
        path: "*",
        Component: () => <Navigate to="/" />,
        name: "*"
    }
];

const createRoutesComponent = ( routes: RouteDef[], RouteType: RouteType ): JSX.Element => (
    <>
        { 
            routes.map( ( { path, params, Component: RouteComponent } ) => (
                <Route
                    key={ path }
                    path={ path }
                    element={ <RouteType params={params} > <RouteComponent /> </RouteType> }
                />
            ))
        }
    </>
)

const createOutletComponent = ( routes: RouteDef[], RouteType: RouteType ): JSX.Element => (
    <Route path={ routes[0].path } element={ <RouteType params={ routes[0].params } > { React.createElement( routes[0].Component ) } </RouteType> }>
        { 
            routes.slice(0).map( ( { path, params, Component: RouteComponent } ) => (
                <Route
                    key={ path }
                    path={ path }
                    element={ <RouteType params={params} > <RouteComponent /> </RouteType> }
                />
            ))
        }
    </Route>
)

export const AppRouter = (): JSX.Element => (
    <Routes>                       
        { createRoutesComponent(publicRoutes,  PublicRoute  ) }
        { /* { createRoutesComponent(privateRoutes, PrivateRoute ) } */ }
        { createOutletComponent(privateRoutes, PrivateRoute) }
        { createRoutesComponent(wildCardRoute, PublicRoute  ) }
    </Routes>
)