<template>
  <div>
    <img v-if="imageData === null || imageData === ''" src="../../assets/images/news-image-placeholder.png" class="img-thumbnail">
    <img v-else :src="imageData" class="img-thumbnail">
  </div>
</template>
<script>
export default {
  name: 'NewsImage',
  props: {
    imageData: String
  }
}
</script>