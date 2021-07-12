import { store } from "./store";

export function authHeader() {
    console.log('authHeader store::::',store.getState());
    const { accessToken } = store.getState().authentication.user;
    if (accessToken) {
        return { 'Authorization': 'Bearer ' + accessToken };
    } else {
        return {};
    }
}