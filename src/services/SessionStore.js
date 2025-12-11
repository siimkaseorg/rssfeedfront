import { reactive } from 'vue';

export const sessionStore = reactive({
    isLoggedIn: sessionStorage.getItem('userId') !== null,
    userId: sessionStorage.getItem('userId'),

    login(loginResponse) {
        sessionStorage.setItem('userId', loginResponse.userId);
        sessionStorage.setItem('roleName', loginResponse.roleName);
        sessionStorage.setItem('userHasSelectedFeedSettings', loginResponse.userHasSelectedFeedSettings);

        this.isLoggedIn = true;
        this.userId = loginResponse.userId;
    },

    logout() {
        sessionStorage.clear();
        this.isLoggedIn = false;
        this.userId = null;
    }
});
