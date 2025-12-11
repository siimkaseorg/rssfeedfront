<template>
  <nav>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-3">
          <img src="assets/logo.png" class="img-thumbnail" alt="rss logo"/>
        </div>

        <div class="col">
          <router-link to="/">Kõik uudised</router-link>
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
          <template v-if="!session.isLoggedIn">
            <router-link to="/signup">Loo konto</router-link>
            <router-link to="/login" class="btn btn-primary">Logi sisse</router-link>
          </template>

          <!-- LOGGED IN: show LOGOUT -->
          <template v-else>
            <h5 @click="logout" class="cursor-pointer">Logi välja</h5>
          </template>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import NavigationService from "@/services/NavigationService";
import { sessionStore } from "@/services/SessionStore";

export default {
  name: "APP",
  data() {
    return {
      session: sessionStore,
    };
  },
  methods: {
    logout() {
      this.session.logout();
      // After logout, always return to the public home page
      NavigationService.navigateToHomeView();
    },
  },
};
</script>
