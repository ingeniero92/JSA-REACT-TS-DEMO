import type { AuthActionLogin, AuthActionLogout } from "../../interfaces";
import { authActions } from "../../interfaces";

export const createLoginAction = ( userName: string, avatar: number ): AuthActionLogin => ({
    type: authActions.login,
    payload: {
        userName,
        avatar
    }
})

export const createLogoutAction = (): AuthActionLogout => ({
    type: authActions.logout,
    payload: {}
})