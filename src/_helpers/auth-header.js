import { store } from "./store";

export function authHeader() {
    const { authentication } = store.getState();
    
    if (authentication.user?.accessToken) {
        return { 'Authorization': 'Bearer ' + authentication.user.accessToken };
    } else {
        return {};
    }
}