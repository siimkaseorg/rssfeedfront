<template>

<!--  <div class="form-check">-->
<!--    <input class="form-check-input" type="checkbox" value="" >-->
<!--    <label class="form-check-label" >-->
<!--      Kõik kategooria-->
<!--    </label>-->
<!--  </div>-->

    <h4>Kõik kategooriad</h4>

  <div v-for="category in categories" :key="category.categoryId" class="form-check">
    <input class="form-check-input" type="checkbox" value="" :checked="category.categoryIsChosen">
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
  methods: {},
  mounted() {
  }
}
</script>