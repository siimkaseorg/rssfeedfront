<template>
  <div class="container text-center">
    <div v-if="!session.isLoggedIn" class="alert alert-info">
      Please log in to see your "read later" list.
    </div>
    <div v-else-if="articles.length === 0" class="alert alert-info">
      Your "read later" list is empty.
    </div>

    <div v-for="article in articles" :key="article.articleId" class="row justify-content-center">
      <Article :article="article" class="mb-2"/>
    </div>
  </div>
</template>

<script>
import Article from "@/components/articles/Article.vue";
import ReadLaterService from "@/services/ReadLaterService";
import { sessionStore } from "@/services/SessionStore";

export default {
  name: 'LaterReadView',
  components: { Article },
  data() {
    return {
      articles: [],
      session: sessionStore,
    }
  },
  watch: {
    // Watch for both login changes and route changes to trigger a fetch
    'session.isLoggedIn': {
      immediate: true,
      handler: 'fetchReadLaterArticles'
    },
    '$route': {
      immediate: true,
      handler: 'fetchReadLaterArticles'
    }
  },
  methods: {
    fetchReadLaterArticles() {
      if (this.session.isLoggedIn) {
        ReadLaterService.getReadLaterArticles(this.session.userId)
            .then(response => {
              this.articles = response.data;
            })
            .catch(error => {
              console.error("Error fetching read later articles:", error);
              this.articles = []; // Clear articles on error
            });
      } else {
        this.articles = []; // Clear articles if logged out
      }
    }
  }
}
</script>
