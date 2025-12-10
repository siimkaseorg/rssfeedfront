<template>
  <div class="container text-center">

    <div class="row justify-content-center mb-5">
      <div class="col col-2">
        <CategoriesTypesCheckbox :categories="categories"
                                 @event-category-updated="updateCategory"
                                 @event-categories-updated="updateCategories"

        />
        <!--  todo: vajab implementeerimist    -->
        <button @click="findArticles" type="submit" class="btn btn-primary">Otsi</button>

      </div>

    </div>

    <div v-for="article in articles" :key="article.articleId" class="row justify-content-center ">
      <Article :article="article" class="mb-2"/>
    </div>


  </div>


</template>

<script>


import CategoriesTypesCheckbox from "@/components/categories/CategoriesTypesCheckbox.vue";
import CategoryService from "@/services/CategoryService";
import ArticleService from "@/services/ArticleService";
import Article from "@/components/articles/Article.vue";

export default {
  name: 'HomeView',
  components: {Article, CategoriesTypesCheckbox},
  data() {
    return {

      userId: Number(sessionStorage.getItem('userId')),

      categoryIds: [],

      categories: [
        {
          categoryId: 0,
          categoryName: '',
          categoryIsChosen: true
        }
      ],

      articles: [
        {
          articleId: 0,
          portalName: '',
          categoryId: 0,
          categoryName: '',
          title: '',
          description: '',
          articleLink: '',
          imageLink: '',
          isInReadList: true
        }
      ]

    }
  },
  methods: {

    findArticles() {
      this.generateChosenCategoryIds()
      ArticleService.sendGetArticlesRequest(this.userId, this.categoryIds)
          .then(response => this.articles = response.data)
          .catch()
    },

    getCategories() {
      CategoryService.sendGetCategoriesRequest()
          .then(response => this.handleGetCategoriesResponse(response))
          .catch()
    },

    handleGetCategoriesResponse(response) {
      this.categories = response.data
      this.generateChosenCategoryIds()
      this.findArticles()
    },

    generateChosenCategoryIds() {
      this.categoryIds = this.categories
          .filter(cat => cat.categoryIsChosen)
          .map(cat => cat.categoryId);
    },

    updateCategory(updatedCategory) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].categoryId === updatedCategory.categoryId) {
          this.categories[i].categoryIsChosen = updatedCategory.categoryIsChosen
          break
        }
      }
    },

    updateCategories(categoriesAreChosen) {
      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i].categoryIsChosen = categoriesAreChosen
      }
    },


  },
  beforeMount() {
    this.getCategories()
  }
}
</script>
