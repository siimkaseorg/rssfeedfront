<template>

  <div class="justify-content-center mb-5">


    <font-awesome-icon @click="feedSettingsView" class="cursor-pointer" icon="fa-solid fa-gear"/>

    <div class="row">
      <div class="col col-3">


      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>

    </div>
  </div>


</template>

<script>
import CategoriesTypesCheckbox from "@/components/categories/CategoriesTypesCheckbox.vue";
import Article from "@/components/articles/Article.vue";
import feedSettingsView from "@/views/FeedSettingsView.vue";

export default {
  name: 'FeedView',
  computed: {
    feedSettingsView() {
      return feedSettingsView
    }
  },
  components: {Article, CategoriesTypesCheckbox},
  data() {
    return {}
  },
  methods: {},
  mounted() {
  }
}
</script>