<template>
  <nav>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">
          <img src="assets/images/rsslogo.png" class="img-thumbnail" alt="rss logo"/>
        </div>
        <div class="col col-3">
          <router-link to="/">Kõik uudised</router-link>
        </div>
        <div class="col col-3">
          <router-link to="/">Minu voog</router-link>
        </div>
        <div class="col col-3">
          <router-link to="/">Loe hiljem</router-link>
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