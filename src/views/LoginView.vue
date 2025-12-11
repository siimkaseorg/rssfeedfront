<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-6">

        <div class="form-floating mb-3">
          <AlertDanger :alert-message="alertMessage"/>
        </div>

      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-2">
        <div class="form-floating mb-3">
          <input v-model="username" type="text" class="form-control" placeholder="Username">
          <label>Username</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
          <label>Password</label>
        </div>
        <div class="form-floating mb-3">
          <button @click="executeLogin()" type="submit" class="btn btn-primary">Logi sisse</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import LoginService from "@/services/LoginService";
import NavigationService from "@/services/NavigationService";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import { sessionStore } from "@/services/SessionStore";

export default {
  name: 'LoginView',
  components: {AlertDanger},
  data() {
    return {
      username: '',
      password: '',
      alertMessage: '',
      errorResponse:{
        errorCode: 0,
        message: ''
      }
    }
  },
  methods: {
    executeLogin() {
      LoginService.sendGetLoginRequest(this.username, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginError(error))
    },

    handleLoginResponse(response) {
      const loginResponse = response.data;
      sessionStore.login(loginResponse);

      this.$emit('event-user-logged-in');

      if (loginResponse.userHasSelectedFeedSettings) {
        // Correct: A logged-in user with settings should go to their personal feed.
        NavigationService.navigateToFeedView();
      } else {
        // Correct: A new user must set up their feed first.
        NavigationService.navigateToFeedSettingsView();
      }
    },

    handleLoginError(error) {
      this.errorResponse = error.response.data
      if (error.response.status === 403 && this.errorResponse.errorCode === 111) {
        this.alertMessage = this.errorResponse.message
      } else{
        NavigationService.navigateToErrorView()
      }
    },
  },
}
</script>