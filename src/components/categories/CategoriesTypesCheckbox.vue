<template>

  <h4>Kõik kategooriad</h4>

  <div v-for="category in categories" :key="category.categoryId" class="form-check">
    <input @change="categoryCheckChanged(category.categoryId, $event.target.checked)" class="form-check-input" type="checkbox" :checked="category.categoryIsChosen">
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
    categoryCheckChanged(categoryId, categoryIsChosen) {

      const categoryCheckboxChangeInfo = {
        categoryId: categoryId,
        categoryIsChosen: categoryIsChosen
      }

      this.$emit('event-category-checkbox-state-changed', categoryCheckboxChangeInfo)
    },
  },
  mounted() {
  }
}
</script>