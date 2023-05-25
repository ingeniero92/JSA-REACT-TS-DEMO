import ES from "../data/ES.json";
import EN from "../data/EN.json";

export const ES_TRAD = ES;
export const EN_TRAD = EN;

export enum languages {
    ES = "es",
    EN = "en"
}

export type TradType = keyof typeof ES; // = keyof Trad;

export interface Trad {

    "backend-title":            string;
    "backend-list-1":           string;
    "backend-list-2":           string;
    "backend-list-3":           string;
    "backend-list-4":           string;
    "backend-list-5":           string;
    "backend-list-6":           string;

    "css-title":                string;
    "css-list-1":               string;
    "css-list-2":               string;
    "css-list-3":               string;
    "css-list-4":               string;
    "css-list-5":               string;
    "css-list-6":               string;

    "footer-disclaimer":        string;

    "header-link-linkedin":     string;
    "header-link-github":       string;
    "header-link-telephone":    string;
    "header-link-email":        string;
    "header-link-download":     string;
    "header-login-placeholder": string;
    "header-login":             string;
    "header-logout":            string;

    "home-title":               string;
    "home-text-1":              string;
    "home-text-2":              string;
    "home-text-3":              string;
    "home-text-4":              string;

    "info-title":               string;
    "info-text-1":              string;
    "info-text-2":              string;
    "info-text-3":              string;

    "methodologies-title":      string;
    "methodologies-list-1":     string;
    "methodologies-list-2":     string;
    "methodologies-list-3":     string;
    "methodologies-list-4":     string;

    "nav-home":                 string;
    "nav-packages":             string;
    "nav-css":                  string;
    "nav-backend":              string;
    "nav-methodologies":        string;

    "patterns-title":           string;
    "patterns-list-1":          string;
    "patterns-list-2":          string;
    "patterns-list-3":          string;
    "patterns-list-4":          string;
    "patterns-list-5":          string;

    "personal-title":           string;

    "react-title":              string;
    "react-list-1":             string;
    "react-list-2":             string;
    "react-list-3":             string;
    "react-list-4":             string;
    "react-list-5":             string;
    "react-list-6":             string;
    "react-list-7":             string;
    "react-list-8":             string;
    "react-list-9":             string;
    "react-list-10":            string;

    "secret-title":             string;
    "secret-text":              string;

}