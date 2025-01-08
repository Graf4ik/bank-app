import { makeAutoObservable } from "mobx";

class AuthStore {
    user = null;
    isAuthenticated = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    login = async () => {
        this.isLoading = true;
        try {
            // const response = await apiLogin(credentials);
            // this.user = response.user;
            this.isAuthenticated = true;
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            this.isLoading = false;
        }
    };

    logout = () => {
        this.user = null;
        this.isAuthenticated = false;
    };

    get isAuth() {
        return this.isAuthenticated;
    }


}

const authStore = new AuthStore();
export default authStore;