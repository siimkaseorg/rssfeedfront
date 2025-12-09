<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-8">
        <h1>Uudise Peakiri</h1>
        <p class="text-start">Center aligned text on all viewport sizes.</p>
        <div class="row">
          <div class="col">
            <button type="button" class="btn btn-primary">Loe 'nimi' uudiste portaalis</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-primary">Loe hiljem</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <img src="../../assets/logo.png" height="200" width="200"/>
            <p class="card-text">Portal</p>
            <p class="card-text">Category</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Article',
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