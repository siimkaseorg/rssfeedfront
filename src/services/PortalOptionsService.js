import axios from "axios";

export default {

    sendPortalOptionsRequest() {
        return axios.get('/portal-options')
    },

    getUserPortalOptions(userId) {
        return axios.get('/user-portal-options', {
            params: {
                userId: userId
            }
        });
    },

    saveUserPortalOptions(userId, portalOptions) {
        return axios.post('/user-portal-options', {
            userId: userId,
            portalOptions: portalOptions
        });
    }

}