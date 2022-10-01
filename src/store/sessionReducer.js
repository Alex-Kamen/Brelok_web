import axios from "axios";

const defaultState = {
    user: {}
}

const LOGIN = "LOGIN";

export const sessionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('auth', JSON.stringify(action.payload))
            return {...state, user: action.payload}
        default:
            return state
    }
}

export const loginAction = (payload) => ({type: LOGIN, payload})

export function fetchLogin(user) {
    return (dispatch) => {
        axios.post(`http://server.esp/auth`, user)
            .then((result) => {
                console.log(result)
                if (result.data.id) {
                    console.log(788)
                    dispatch(loginAction(user));
                }
            })
    }
}

export function fetchRegister(user) {
    return (dispatch) => {
        axios.post(`http://server.esp/register`, user)
    }
}
