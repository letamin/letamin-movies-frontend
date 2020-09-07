<template>
  <div class="container">
    <Loader v-if="loading" />

    <div class="position-relative">
      <h1 class="text-center mt-4 title">Movies</h1>
      <input size="sm" class="mr-sm-2 search-box" placeholder="Search" v-model="searchTerm" />
      <a href="/admin/movies/add">
        <button class="btn btn-success btn-add">Add</button>
      </a>
    </div>

    <div class="row mt-4 movies-container" v-if="movies">
      <div class="col-lg-3 col-md-6" v-for="movie in filteredMovie" :key="movie._id">
        <b-card
          overlay
          :img-src="movie.poster"
          img-alt="Image"
          img-top
          style="max-width: 15rem;"
          class="mb-4 position-relative"
        >
          <b-link class="btn btn-edit" :to="`/admin/movies/edit/${movie._id}`">Edit</b-link>
          <b-link class="btn btn-delete" :to="`/admin/movies/delete/${movie._id}`">Delete</b-link>
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
  data() {
    return {
      searchTerm: "",
      movieInfo: null
    };
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
    },
    filteredMovie() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, "gi");
        return this.movies.filter(movie =>
          (movie.name + movie.genre).match(regexp)
        );
      }
      return this.movies;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchDeleteMovie", this.movieInfo._id);
    },
    passMovieInfo(movie) {
      this.movieInfo = movie;
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
  display: none;
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

.card:hover .btn-edit,
.card:hover .btn-delete {
  display: block;
}

.search-box {
  position: absolute;
  right: 0;
  top: 50%;
}

.btn-add {
  position: absolute;
  left: 0;
  top: 50%;
}

a {
  text-decoration: none;
  color: white;
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

@media (max-width: 768px) {
  .movies-container {
    margin-top: 60px !important;
  }

  .search-box,
  .btn-add {
    top: 120%;
  }

  .search-box {
    right: 10%;
  }

  .btn-add {
    left: 10%;
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

  .search-box {
    right: 5%;
  }

  .btn-add {
    left: 5%;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 32px;
  }
}
</style>