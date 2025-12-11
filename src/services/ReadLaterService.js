import axios from "axios";

export default {
    addArticleToReadLater(userId, articleId) {
        return axios.post('/read-later', {
            userId: userId,
            articleId: articleId
        });
    }
}
