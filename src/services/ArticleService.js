import axios from "axios";

export default {
    /**
     * Fetches the public feed, optionally filtered by categories.
     * This is for HomeView and always sends userId = 0.
     * @param {number[]} categoryIds An array of category IDs to filter by.
     */
    getPublicFilteredArticles(categoryIds) {
        return axios.get('/articles', {
            params: {
                userId: 0,
                categoryIds: categoryIds.join(',')
            }
        });
    },

    /**
     * Fetches the personalized article feed for a logged-in user based on their saved settings.
     * This is for FeedView.
     * @param {number} userId The logged-in user's ID.
     * @param {number[]} categoryIds An array of the user's selected category IDs.
     */
    getFeedViewArticles(userId, categoryIds) {
        return axios.get('/articles', {
            params: {
                userId: userId,
                categoryIds: categoryIds.join(',')
            }
        });
    }
};
