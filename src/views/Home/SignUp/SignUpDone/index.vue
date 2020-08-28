<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-6 mx-auto confirm-container text-center" v-if="user">
        <h3>Welcome {{user.fullName}},</h3>
        <p class="mt-3">
          Your account has been created, please check your email address:
          <span
            class="font-weight-bold"
          >{{user.email}}</span> for more information.
          <br />If you have any problem, do not hesitate to contact us.
        </p>
        <button class="btn btn-success">
          <a href="/">Home</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = this.$store.state.signUp.data;
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.confirm-container {
  padding: 20px;
  min-height: 100px;
  border-radius: 5px;
  background: white;
  word-wrap: break-word;
}

@media (max-width: 575px) {
  .confirm-container {
    max-width: 220px;
  }
}
</style>