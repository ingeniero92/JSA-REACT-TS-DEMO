/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_POKEMON_API_URL: string
    readonly VITE_BREAKINGBADQUOTES_API_URL: string
    readonly VITE_APP_VERSION: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

