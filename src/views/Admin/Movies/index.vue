<template>
  <div class="container">
    <Loader v-if="loading" />
    <h1 class="text-center mt-4 title">Movies</h1>
    <div class="row mt-4" v-if="movies">
      <div class="col-lg-3 col-md-6" v-for="movie in movies" :key="movie._id">
        <b-card
          overlay
          :img-src="movie.poster"
          img-alt="Image"
          img-top
          style="max-width: 15rem;"
          class="mb-4 position-relative"
        >
          <b-link class="btn btn-edit" :to="`/admin/movies/edit/${movie._id}`">Edit</b-link>
          <b-link class="btn btn-delete">Delete</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/Loader";

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchAllMovies");
  },
  computed: {
    movies() {
      return this.$store.state.movies.data;
    },
    loading() {
      return this.$store.state.movies.loading;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.card {
  margin: 0 auto;
}

.card-img-top {
  max-width: 100%;
  height: 355px;
  width: 240px;
}

.title {
  font-family: "Lato", sans-serif;
  font-size: 56px;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  line-height: 1.1;
}

.btn-edit,
.btn-delete {
  outline: none;
  border: none;
  background: #e76f51;
  margin: 0.2em;
  color: #fff;
  position: absolute;
  bottom: 7%;
  width: 80px;
}

.btn-edit {
  background: #2a9d8f;
  left: 10%;
}

.btn-delete {
  right: 10%;
}

.btn-edit:hover,
.btn-delete:hover {
  opacity: 0.9;
}

@media (max-width: 1080px) {
  .title {
    font-size: 51px;
  }
}

@media (max-width: 800px) {
  .title {
    font-size: 48px;
  }
}

@media (max-width: 667px) {
  .title {
    font-size: 43px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 40px;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 35px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 32px;
  }
}
</style>