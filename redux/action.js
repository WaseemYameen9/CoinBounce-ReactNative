import { SET_USER, RESET_USER } from "./constant"

export const SetUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const ResetUser = (data) => {
    return {
        type: RESET_USER,
    }
}
