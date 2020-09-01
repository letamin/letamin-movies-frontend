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
            <div class="alert alert-danger" v-if="err">{{ err.response.data.message }}</div>
            <div class="form-container">
              <h3 class="text-center mb-3 form-title text-light">LOGIN</h3>
              <form @submit.prevent="handleLogin">
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
                <button type="submit" class="btn w-100 mt-3 form-btn-login">Login</button>
              </form>
              <b-link
                class="text-light text-signup mt-2"
                to="/signup"
              >Do not have an account yet? Signup now!</b-link>
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
    NavbarHome
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    loading() {
      return this.$store.state.login.loading;
    },
    err() {
      return this.$store.state.login.err;
    }
  },
  methods: {
    handleLogin() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("fetchUserLogin", formData);
    }
  }
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
  padding: 30px 30px 15px 30px;
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

.text-signup {
  font-size: 14px;
  text-align: right;
  display: block;
}
</style>
