<template>
  <div class="container text-center">
    <div class="row justify-content-end mb-3">
      <div class="col-auto">
        <font-awesome-icon @click="navigateToFeedSettings" class="cursor-pointer" icon="fa-solid fa-gear" size="2x"/>
      </div>
    </div>

    <div v-if="!session.isLoggedIn" class="alert alert-warning">
      Please log in to see your personalized feed.
    </div>
    <div v-else-if="noCategoriesSelected" class="alert alert-info">
      Please select some categories in the <router-link to="/feed/settings">feed settings</router-link> to build your feed.
    </div>

    <div v-for="article in articles" :key="article.articleId" class="row justify-content-center">
      <Article :article="article" @article-added-to-read-later="updateArticleReadLaterStatus" class="mb-2"/>
    </div>
  </div>
</template>

<script>
import Article from "@/components/articles/Article.vue";
import ArticleService from "@/services/ArticleService";
import { sessionStore } from "@/services/SessionStore";

export default {
  name: 'FeedView',
  components: {Article},
  data() {
    return {
      articles: [],
      noCategoriesSelected: false,
      session: sessionStore,
    }
  },
  watch: {
    'session.isLoggedIn': {
      immediate: true,
      handler(isLoggedIn) {
        if (isLoggedIn) {
          this.loadFilteredArticles();
        } else {
          this.articles = [];
          this.noCategoriesSelected = false;
        }
      }
    }
  },
  methods: {
    navigateToFeedSettings() {
      this.$router.push({ name: 'feedSettingsRoute' });
    },
    loadFilteredArticles() {
      const savedOptions = localStorage.getItem('portalOptions');
      let categoryIds = [];

      if (savedOptions) {
        const portalOptions = JSON.parse(savedOptions);
        categoryIds = portalOptions
            .filter(portal => portal.portalIsChosen)
            .flatMap(portal => portal.categoryOptions
                .filter(category => category.categoryIsChosen)
                .map(category => category.categoryId)
            );
      }

      if (categoryIds.length > 0) {
        this.noCategoriesSelected = false;
        ArticleService.getFeedViewArticles(this.session.userId, categoryIds)
            .then(response => {
              this.articles = response.data;
            })
            .catch(error => {
              console.error("Error fetching feed articles:", error);
              this.articles = [];
            });
      } else {
        this.articles = [];
        this.noCategoriesSelected = true;
      }
    },
    updateArticleReadLaterStatus(articleId) {
      const article = this.articles.find(a => a.articleId === articleId);
      if (article) {
        article.isInReadList = true;
      }
    }
  }
}
</script>
