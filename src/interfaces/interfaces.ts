/* REDUX */

import type { RootState as RootStateType, AppDispatch as AppDispatchType } from "../store";

export type RootState = RootStateType;
export type AppDispatch = AppDispatchType;

/* GENERIC */

export interface ChildrenProp {
    children: React.ReactNode
}

export type ThunkMiddlewareReturn = ( dispatch: AppDispatch, getState: () => RootState ) => Promise<void>;

/* ENV */

export interface EnvironmentVariables {
    APP_TITLE: string;
    POKEMON_API_URL: string;
    BREAKINGBADQUOTES_API_URL: string;
    APP_VERSION: string;
}

/* ROUTES */

export interface RouteParams {
    rolesAllowed?: string[]
}

export interface ChildrenRoute {
    children: React.ReactNode,
    params?: RouteParams
}

export type RouteType = ({ children }: ChildrenRoute) => JSX.Element; // React.ElementType o React.FunctionComponent<any>

export interface RouteDef {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
    params?: RouteParams;
}

/* REACT ROUTER STATES */

export interface ScrollState {
    scroll: boolean;
}

/* UI */

export interface UiState {
    lang: string;
}

/* AUTH */

// Two different ways to define action types (enum and const)
export enum authActions {
    login = "[AUTH] LOGIN",
    logout = "[AUTH] LOGOUT"
}

export const authTypes = {
    login: "[AUTH] LOGIN",
    logout: "[AUTH] LOGOUT"
}

export interface AuthActionLogin { 
    type: typeof authTypes.login, payload: { userName: string, avatar: number } 
}

export interface AuthActionLogout { 
    type: authActions.logout, payload: {} 
}

export type AuthAction = AuthActionLogin | AuthActionLogout;

export enum Roles {
    guest = "guest",
    cat_lover = "cat_lover"
}

export interface AuthState {
    logged: boolean;
    userName: string;
    role: Roles;
    avatar: number;
}

export interface AuthContextProps {
    authState: AuthState;
    login: (userName: string) => void;
    logout: () => void;
    checkToken: () => boolean;
}

/* BREAKING BAD API */

export interface Quote {
    quote: string;
    author: string;
}

export interface BreakingBadState {
    quote: Quote;
    isLoading: boolean;
    error: string;
}

/* POKEMON API */

export interface Sprites {
    front_default: string;
    back_default: string;
}

export interface Pokemon {
    id: number;
    name: string;
    sprites: Sprites;
}
export interface PokemonState {
    pokemon: Pokemon;
    isLoading: boolean;
}