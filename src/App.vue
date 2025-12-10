<template>
  <nav>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">
          <img src="assets/images/rsslogo.png" class="img-thumbnail" alt="rss logo"/>
        </div>
        <div class="col">
          <router-link to="/news">Kõik uudised</router-link>
        </div>
        <div class="col">
          <router-link to="/feed">Minu voog</router-link>
        </div>
        <div class="col">
          <router-link to="/read">Loe hiljem</router-link>
        </div>


      </div>
    </div>

    <hr>

    <div class="container text-center">
      <div class="row">
        <div class="col-md-8">
        </div>

        <div class="col">
          <template v-if="!isLoggedIn">
            <router-link to="/signup">Loo konto</router-link>
            <router-link to="/login" type="button" class="btn btn-primary">Logi sisse</router-link>
          </template>

          <template v-else>
            <h5 @click="startLogOutProcess" class="cursor-pointer">Logi välja</h5>
          </template>
        </div>

      </div>
    </div>

  </nav>
  <router-view @event-user-logged-in="updateNavMenu"/>
</template>


<script>
export default {
  name: "APP",
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      logOutModalIsOpen: false
    }
  },
  methods: {

    startLogOutProcess() {
      this.openLogOutModal()
    },

    openLogOutModal() {
      this.logOutModalIsOpen = true
    },


    closeLogOutModal() {
      this.logOutModalIsOpen = false
    },


    executeLogOut() {
      this.closeLogOutModal()
      sessionStorage.clear()
      this.updateNavMenu()
      NavigationService.navigateToHomeView();
    },


    updateNavMenu() {
      this.isLoggedIn = SessionStorageService.isLoggedIn()
      this.isAdmin = SessionStorageService.isAdmin()
    },

  },
  beforeMount() {
    this.updateNavMenu()
  }
}

</script>