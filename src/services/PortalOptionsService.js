import axios from "axios";

export default {

    sendPortalOptionsRequest() {
        return axios.get('/portal/options')
    },

}