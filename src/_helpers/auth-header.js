import { store } from "./store";

export function authHeader() {
    console.log('authHeader store::::',store.getState());
    const { authentication } = store.getState();
    
    if (authentication.user?.accessToken) {
        return { 'Authorization': 'Bearer ' + authentication.user.accessToken };
    } else {
        return {};
    }
}