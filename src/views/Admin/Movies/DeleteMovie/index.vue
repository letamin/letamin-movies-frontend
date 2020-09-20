<template>
  <div class="delete-container">
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-movieDeleteConfirm" @ok="onModalOk" v-if="movie">
      <template v-slot:modal-title>
        <div>
          <template>Confirming...</template>
        </div>
      </template>
      <div>Are you sure you want to DELETE this movie?</div>
    </b-modal>

    <div class v-if="movie">
      <h3 class="text-center mt-4 title">Deleting...</h3>
      <div class="col-sm-6 mt-4 mx-auto">
        <b-card
          overlay
          :img-src="movie.poster"
          img-alt="Image"
          img-top
          style="max-width: 15rem;"
          class="mb-4 position-relative"
        >
          <b-link class="btn btn-delete" v-b-modal="'modal-movieDeleteConfirm'">Delete</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";
import NavbarAdmin from "../../../../components/NavbarAdmin";

export default {
  components: {
    Loader,
    NavbarAdmin
  },
  beforeCreate() {
    if (!this.$store.state.login.token) {
      this.$router.replace("/");
    }
  },
  created() {
    this.$store.dispatch("fetchMoviesById", this.$route.params.id);
  },
  computed: {
    movie() {
      return this.$store.state.movies.data;
    },
    loading() {
      return this.$store.state.movies.loading;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchDeleteMovie", this.$route.params.id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.delete-container {
  font-family: "Lato", sans-serif;
}

.card {
  margin: 0 auto;
}

.btn-delete {
  outline: none;
  border: none;
  background: #e76f51;
  margin: 0.2em;
  color: #fff;
  position: absolute;
  bottom: 7%;
  width: 80px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-delete:hover {
  opacity: 0.9;
}

@media (max-width: 667px) {
  .title {
    font-size: 35px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 30px;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 28px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 24px;
  }
}
</style>
