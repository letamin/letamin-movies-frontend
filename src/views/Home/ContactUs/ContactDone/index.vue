<template>
  <div class="container">
    <div class="row mt-5" v-if="formObj">
      <div class="col-sm-6 mx-auto text-center confirm-container">
        <h3>Thank you for contacting us {{formObj.name}},</h3>
        <p
          class="mt-3"
        >We have received your message, please wait while we checking it. We will get back to you as soon as possible.</p>
        <p>
          Do not forget to check your email
          <span class="font-weight-bold">{{formObj.email}}</span> for update!
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
      formObj: null
    };
  },
  created() {
    this.formObj = this.$store.state.contacts.data;
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
  background: rgba(1, 1, 1, 0.5);
  word-wrap: break-word;
  color: white;
}

@media (max-width: 575px) {
  .confirm-container {
    max-width: 220px;
  }
}
</style>