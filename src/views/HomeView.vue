<template>
  <div class="home">
    <h1>Kodu vaade</h1>
  </div>

  <div class="row justify-content-center">
    <div class="col col-2">
      <CategoriesTypesCheckbox :categories/>
    </div>
  </div>


</template>

<script>


import CategoriesTypesCheckbox from "@/components/categories/CategoriesTypesCheckbox.vue";

export default {
  name: 'HomeView',
  components: {CategoriesTypesCheckbox}
}
</script>
