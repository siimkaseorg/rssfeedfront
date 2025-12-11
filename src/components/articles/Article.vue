<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-8">
        <h3>{{ article.title }}</h3>
        <p class="text-start">{{ article.description }}</p>
        <div class="row">
          <div class="col">
            <button @click="navigateToLink(article.articleLink)" type="button" class="btn btn-primary">Loe
              {{ article.portalName }} uudiste portaalis
            </button>
          </div>
          <div class="col">
            <button v-if="!article.isInReadList" @click="addToReadLater(article.articleId)" type="button" class="btn btn-primary">Loe hiljem</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <NewsImage :image-data="article.imageLink"/>
          <p class="card-text">{{ article.portalName }}</p>
          <p class="card-text">{{ article.categoryName }}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import NewsImage from "@/components/image/NewsImage.vue";
import SessionStorageService from "@/services/SessionStorageService";
import ReadLaterService from "@/services/ReadLaterService";

export default {
  name: 'Article',
  components: {NewsImage},
  props: {
    article: {}
  },
  data() {
    return {}
  },
  methods: {

    navigateToLink(link) {
      // HELP HERE navigate to link such as "https://sport.err.ee/1609879552/tamm-naasis-algkoosseisu-aga-olimpija-kaotas-tabelinaabrile"
      window.open(link, "_blank");
    },

    addToReadLater: function (articleId) {
      if (SessionStorageService.isLoggedIn()) {
        const userId = sessionStorage.getItem('userId');
        ReadLaterService.addArticleToReadLater(userId, articleId)
            .then(() => {
              this.$emit('article-added-to-read-later', articleId);
            })
            .catch(error => {
              console.error("Error adding article to read later list:", error);
            });
      } else {
        alert("Please log in to save articles for later.");
        // Here you can later implement the modal logic.
      }
    },
  },
  mounted() {
  }
}
</script>