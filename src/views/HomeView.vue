<template>
  <div class="home">
    <h1 class="mb-3">Kodu vaade</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col col-2">
      <CategoriesTypesCheckbox :categories="categories"
                               @event-category-updated="updateCategory"
                               @event-categories-updated="updateCategories"

      />
      <!--  todo: vajab implementeerimist    -->
      <button type="submit" class="btn btn-primary">Otsi</button>

    </div>

  </div>


</template>

<script>


import CategoriesTypesCheckbox from "@/components/categories/CategoriesTypesCheckbox.vue";
import CategoryService from "@/services/CategoryService";

export default {
  name: 'HomeView',
  components: {CategoriesTypesCheckbox},
  data() {
    return {

      categories: [
        {
          categoryId: 0,
          categoryName: '',
          categoryIsChosen: true
        }
      ]

    }
  },
  methods: {

    getCategories() {
     CategoryService.sendGetCategoriesRequest()
          .then(response => this.categories = response.data)
          .catch()
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
