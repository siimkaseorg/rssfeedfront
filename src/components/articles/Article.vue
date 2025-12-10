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

export default {
  name: 'Article',
  components: {NewsImage},
  props: {
    article: {}
  },
  // articles: [
  //   {
  //     articleId: 0,
  //     portalName: '',
  //     categoryId: 0,
  //     categoryName: '',
  //     title: '',
  //     description: '',
  //     articleLink: '',
  //     imageLink: '',
  //     isInReadList: false
  //   }
  // ]
  data() {
    return {}
  },
  methods: {

    navigateToLink(link) {
      // HELP HERE navigate to link such as "https://sport.err.ee/1609879552/tamm-naasis-algkoosseisu-aga-olimpija-kaotas-tabelinaabrile"
      window.open(link, "_blank");
    },

    addToReadLater: function (articleId) {

      let isLoggedIn = SessionStorageService.isLoggedIn();


      // todo: kontrolli kas kasutaja on sisse logitud
      if (isLoggedIn) {
        let userId = sessionStorage.getItem('userId');
        // todo: käivita backend teenus Post (params: userId, articleId), et lisada artikel kasutaja listi
        // emiti parentile ('event-article-added-to-read-later', articleId)
            // parent loopib läbi articles massiivi, ja võrdleb saadetud articleId väärtsust.
            // kui liab vaste, siis muudab ära kokreetse artikli 'isInReadList' väärtuse 'true'
      } else  {
        // kui mitte, siis tee modal lahti, ja ütle, et kui tahad artikleid lisada oma nimekirja, siis logi siis
        // 2 nuppu
        // sulge (sulgem modali)
        // logi sisse (suunab kasutaja login vaatale)

      }


    },

  },
  mounted() {
  }
}
</script>