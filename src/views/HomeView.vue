<template>
  <div class="home">
    <h1>Kodu vaade</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col col-2">
      <CategoriesTypesCheckbox :categories="categories"
                               @event-category-checkbox-state-changed="updateCategoriesCategoryIsChosenValue"

      />
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

    updateCategoriesCategoryIsChosenValue(categoryCheckboxChangeInfo) {

      alert("categoryId: " + categoryCheckboxChangeInfo.categoryId + " categoryIsChosen: " + categoryCheckboxChangeInfo.categoryIsChosen)
      // const categoryCheckboxChangeInfo = {
      //   categoryId: categoryId,
      //   categoryIsChosen: categoryIsChosen
      // }

      // todo: käi for (index) tsükliga läbi this.categories massiiv.
      //  Vaata igal tsüklil  categoryCheckboxChangeInfo.categoryId väärtust
      //  ja võrdle seda kokreetsel tsüklil category objekti välja categoryId vastu
      //  Kui väärtused klapivad, siis muuda selle category objekti välja categoryIsChosen väärtust
      //  vastavalt categoryCheckboxChangeInfo.categoryId väärtusega
    },

  },
  beforeMount() {
    this.getCategories()
  }
}
</script>
