<template>
  <div class="container text-center">
    <div class="row justify-content-end mb-3">
      <div class="col-auto">
        <font-awesome-icon @click="navigateToFeedSettings" class="cursor-pointer" icon="fa-solid fa-gear" size="2x"/>
      </div>
    </div>

    <div v-if="noCategoriesSelected" class="alert alert-info">
      Please select some categories in the <a href="#" @click.prevent="navigateToFeedSettings">feed settings</a> to see articles.
    </div>

    <div v-for="article in articles" :key="article.articleId" class="row justify-content-center">
      <Article :article="article" @article-added-to-read-later="updateArticleReadLaterStatus" class="mb-2"/>
    </div>
  </div>
</template>

<script>
import Article from "@/components/articles/Article.vue";
import ArticleService from "@/services/ArticleService";

export default {
  name: 'FeedView',
  components: {Article},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      articles: [],
      noCategoriesSelected: false
    }
  },
  updateArticleReadLaterStatus(articleId) {
    const article = this.articles.find(a => a.articleId === articleId);
    if (article) {
      article.isInReadList = true;
    }
  },
  methods: {
    navigateToFeedSettings() {
      this.$router.push({ name: 'feedSettingsRoute' });
    },
    loadFilteredArticles() {
      const savedOptions = localStorage.getItem('portalOptions');
      if (savedOptions) {
        const portalOptions = JSON.parse(savedOptions);
        const categoryIds = portalOptions
            .filter(portal => portal.portalIsChosen)
            .flatMap(portal => portal.categoryOptions
                .filter(category => category.categoryIsChosen)
                .map(category => category.categoryId)
            );

        if (categoryIds.length > 0) {
          this.noCategoriesSelected = false;
          ArticleService.sendGetArticlesRequest(this.userId, categoryIds)
              .then(response => {
                this.articles = response.data;
              })
              .catch(error => {
                console.error("Error fetching articles:", error);
              });
        } else {
          this.articles = [];
          this.noCategoriesSelected = true;
        }
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
  },
  beforeMount() {
    this.loadFilteredArticles();
  }
}
</script>