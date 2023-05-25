import { createContext } from "react";

import type { AuthContextProps } from "../../interfaces";

export const AuthContext = createContext( {} as AuthContextProps );