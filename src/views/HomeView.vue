<template>
  <div class="container text-center">

    <div class="row justify-content-center mb-5">
      <div class="col col-2">
        <CategoriesTypesCheckbox :categories="categories"
                                 @event-category-updated="updateCategory"
                                 @event-categories-updated="updateCategories"
        />
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
      categoryIds: [],
      categories: [],
      articles: []
    }
  },
  methods: {
    findArticles() {
      this.generateChosenCategoryIds();
      // This view should ONLY ever get public articles.
      ArticleService.getPublicFilteredArticles(this.categoryIds)
          .then(response => this.articles = response.data)
          .catch(error => {
            console.error("Error fetching public articles:", error);
            this.articles = [];
          });
    },

    getCategories() {
      CategoryService.sendGetCategoriesRequest()
          .then(response => this.handleGetCategoriesResponse(response))
          .catch(error => {
            console.error("Error fetching categories:", error);
          });
    },

    handleGetCategoriesResponse(response) {
      this.categories = response.data;
      this.findArticles(); // Initial article load after getting categories
    },

    generateChosenCategoryIds() {
      this.categoryIds = this.categories
          .filter(cat => cat.categoryIsChosen)
          .map(cat => cat.categoryId);
    },

    updateCategory(updatedCategory) {
      const category = this.categories.find(c => c.categoryId === updatedCategory.categoryId);
      if (category) {
        category.categoryIsChosen = updatedCategory.categoryIsChosen;
      }
    },

    updateCategories(categoriesAreChosen) {
      this.categories.forEach(category => {
        category.categoryIsChosen = categoriesAreChosen;
      });
    },
  },
  beforeMount() {
    this.getCategories();
  }
}
</script>
