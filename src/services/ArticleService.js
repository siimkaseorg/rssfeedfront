import axios from "axios";

export default {

    sendGetArticlesRequest(userId, categoryIds) {
        return axios.get('/articles', {
            params:{
                userId: userId,
                categoryIds: categoryIds
            }
        })
    },

}