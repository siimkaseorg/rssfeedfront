<template>


  <div class="form-check">
    <input @change="updateAllCategories($event.target.checked)" class="form-check-input" type="checkbox" checked>
    <label class="form-check-label" >
      Kõik kategooriad
    </label>
  </div>

  <hr>
  <div v-for="category in categories" :key="category.categoryId" class="form-check">
    <input @change="updateCategory(category.categoryId, $event.target.checked)" class="form-check-input" type="checkbox" :checked="category.categoryIsChosen">
    <label class="form-check-label" >
      {{ category.categoryName }}
    </label>
  </div>

</template>

<script>
export default {
  name: 'CategoriesTypesCheckbox',
  props: {
    categories: Array
  },
  data() {
    return {}
  },
  methods: {

    updateCategory(categoryId, categoryIsChosen) {
      const updatedCategory = {
        categoryId: categoryId,
        categoryIsChosen: categoryIsChosen
      }

      this.$emit('event-category-updated', updatedCategory)
    },

    updateAllCategories(categoriesAreChosen) {
      this.$emit('event-categories-updated', categoriesAreChosen)

    },
  },
  mounted() {
  }
}
</script>