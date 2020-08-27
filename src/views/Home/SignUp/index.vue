<template>
  <div class="login-container">
    <NavbarHome />

    <div class="mt-5">
      <template v-if="loading">
        <Loader />
      </template>
      <div v-else class="container">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <div class="alert alert-danger text-center" v-if="errors">
              <div class="" v-for="(error, index) in errors" :key="index">
                {{ error }}
              </div>
            </div>
            <div class="form-container">
              <h3 class="text-center mb-3 form-title text-light">Sign Up</h3>
              <form @submit.prevent="handleSignUp">
                <div class="form-group">
                  <label class="text-light" for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Example@email.com"
                    id="email"
                  />
                </div>
                <div class="form-group">
                  <label class="text-light" for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div class="form-group">
                  <label class="text-light" for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="fullName"
                    placeholder="Name"
                    id="name"
                  />
                </div>
                <button type="submit" class="btn w-100 mt-3 form-btn-login">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from "../../../components/NavbarHome";
import Loader from "../../../components/Loader";

export default {
  components: {
    Loader,
    NavbarHome,
  },
  data() {
    return {
      email: "",
      password: "",
      fullName: "",
    };
  },
  computed: {
    errors() {
      return this.$store.state.signUp.err;
    },
    loading() {
      return this.$store.state.signUp.loading;
    },
  },
  methods: {
    handleSignUp() {
      const formData = {
        email: this.email,
        password: this.password,
        fullName: this.fullName,
      };
      this.$store.dispatch("fetchUserSignUp", formData);

      this.email = "";
      this.password = "";
      this.fullName = "";
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: url("../../../assets/background-login.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.form-container {
  border-radius: 15px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
}

.form-group input,
.form-btn-login {
  height: 50px;
}

.form-btn-login {
  background: #e63946;
  color: white;
}

.form-btn-login:hover {
  opacity: 0.9;
}

.form-group label {
  font-weight: bold;
  font-size: 1.2em;
}

.form-title {
  font-weight: bold;
  font-size: 2em;
}
</style>
