<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-2">

        <div class="form-floating mb-3">
          <input v-model="username" type="text" class="form-control" placeholder="Username">
          <label>Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" placeholder="Password">
          <label>Password</label>
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
      password:"",
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>