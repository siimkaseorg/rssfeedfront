<template>
  <nav>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">
          <img src="assets/images/rsslogo.png" class="img-thumbnail" alt="rss logo"/>
        </div>
        <div class="col">
          <router-link to="/">Kõik uudised</router-link>
        </div>
        <div class="col">
          <router-link to="/">Minu voog</router-link>
        </div>
        <div class="col">
          <router-link to="/">Loe hiljem</router-link>
        </div>
        <div class="col">
        <button type="button" class="btn btn-light btn-outline-dark"><router-link to="/">Logi Sisse</router-link></button>
      </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-md-8">
        </div>
        <div class="col">
          <router-link to="/">Loo konto</router-link>
        </div>

      </div>

    </div>

  </nav>
  <router-view/>
</template>


<script>
export default {
  name: "APP"
}
</script>