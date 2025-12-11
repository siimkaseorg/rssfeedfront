import axios from "axios";

export default {
    /**
     * Adds an article to the user's "read later" list.
     * @param {number} userId The user's ID.
     * @param {number} articleId The article's ID.
     */
    addArticleToReadLater(userId, articleId) {
        return axios.post('/read-later', {
            userId: userId,
            articleId: articleId
        });
    },

    /**
     * Fetches all articles from the user's "read later" list.
     * @param {number} userId The user's ID.
     */
    getReadLaterArticles(userId) {
        return axios.get('/read-later', {
            params: {
                userId: userId
            }
        });
    }
}
