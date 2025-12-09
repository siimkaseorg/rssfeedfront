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

export default {
  name: 'LoginView',
  components: {AlertDanger},
  data() {
    return {
      username: '',
      password: '',

      alertMessage: '',

      loginResponse: {
        userId: 0,
        roleName: '',
        userHasSelectedFeedSettings: false
      },

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
      this.loginResponse = response.data
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
      sessionStorage.setItem('userHasSelectedFeedSettings', this.loginResponse.userHasSelectedFeedSettings)
      NavigationService.navigateToHomeView()
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
  mounted() {
  }
}
</script>