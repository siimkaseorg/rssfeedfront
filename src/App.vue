<template>
  <nav>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">

          <img src="assets/logo.png" class="img-thumbnail" alt="rss logo"/>
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

    <!-- LOGIN / LOGOUT AREA -->
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8"></div>

        <div class="col">

          <!-- NOT LOGGED IN: show SIGNUP + LOGIN -->
          <template v-if="!isLoggedIn">
            <router-link to="/signup">Loo konto</router-link>
            <router-link to="/login" class="btn btn-primary">Logi sisse</router-link>
          </template>

          <!-- LOGGED IN: show LOGOUT -->
          <template v-else>
            <h5 @click="startLogOutProcess" class="cursor-pointer">Logi välja</h5>
          </template>

        </div>
      </div>
    </div>

  </nav>

  <!-- LISTEN FOR LOGIN EVENTS FROM CHILD COMPONENTS -->
  <router-view @event-user-logged-in="updateNavMenu"/>
</template>


<script>
import SessionStorageService from "@/services/SessionStorageService";
import NavigationService from "@/services/NavigationService";

export default {
  name: "APP",

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      logOutModalIsOpen: false,
    };
  },

  methods: {

    // Called when "Logi välja" is clicked
    startLogOutProcess() {
      this.openLogOutModal();
      this.executeLogOut(); // If you don’t want a modal, logout immediately
    },

    openLogOutModal() {
      this.logOutModalIsOpen = true;
    },

    closeLogOutModal() {
      this.logOutModalIsOpen = false;
    },

    // Main logout function
    executeLogOut() {
      sessionStorage.clear();        // Remove login session
      this.updateNavMenu();          // Update nav menu state
      NavigationService.navigateToHomeView(); // Go to home
    },

    // Updates isLoggedIn and isAdmin based on session storage
    updateNavMenu() {
      this.isLoggedIn = SessionStorageService.isLoggedIn();
      this.isAdmin = SessionStorageService.isAdmin();
    },

  },

  // Update navigation menu on first load
  beforeMount() {
    this.updateNavMenu();
  },
};
</script>
