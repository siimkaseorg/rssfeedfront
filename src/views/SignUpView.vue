<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-4">

        <div class="form-floating mb-3">
          <input v-model="username" type="text" class="form-control" placeholder="Username">
          <label>Kasutajanimi</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="email" type="text" class="form-control" placeholder="Username">
          <label>E-mail</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="password" type="text" class="form-control" placeholder="Username">
          <label>Parool</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="password" type="text" class="form-control" placeholder="Username">
          <label>Korda parool</label>
        </div>

        <div class="col">
          <router-link to="/" type="button" class="btn btn-primary">Next</router-link>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username:"",
      email:"",
      password:"",
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>