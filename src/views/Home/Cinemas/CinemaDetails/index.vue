<template>
  <div class="container">
    <Loader v-if="loading" />
    <div class v-if="cinema">
      <h1 class="mt-3 text-center cinema-details-title">{{ cinema.name }}</h1>
      <div class="cinema-background mt-4">
        <div class="cinema-details-container">
          <div class>
            <span class="font-weight-bold cinema-details-text">Address:</span>
            <span class="cinema-details-text">{{ " " + cinema.address }}</span>
          </div>
          <div class>
            <span class="font-weight-bold cinema-details-text">Province:</span>
            <span class="cinema-details-text">{{ " " + cinema.province }}</span>
          </div>
        </div>
      </div>

      <div
        class="mt-5 cinema-movie-container"
        v-for="(movie, index) in movieArray"
        :key="index"
      >
        <div class="row">
          <div class="col-lg-3 col-sm-5 movie-poster">
            <img :src="movie.poster" alt="movie poster" />
          </div>
          <div class="col-lg-6 col-sm-7 movie-date-container">
            <h3>{{ movie.name }} ({{ movie.rated }})</h3>
            <TimeSpan :dates="movie.dates" :movie="movie" :cinema="cinema" />
          </div>
        </div>
        <div class="hr mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";
import TimeSpan from "../../../../components/TimeSpan";

export default {
  components: {
    Loader,
    TimeSpan
  },
  data() {
    return {
      movieArray: []
    };
  },
  created() {
    this.$store.dispatch("fetchCinemaById", this.$route.params.id);
  },
  computed: {
    cinema() {
      return this.$store.state.cinemas.data;
    },
    loading() {
      return this.$store.state.cinemas.loading;
    },
    movie() {
      return this.$store.state.movies.data;
    }
  },
  methods: {
    test(e) {
      console.log(e);
    }
  },
  watch: {
    cinema(value) {
      if (value) {
        value.movieId.forEach(id => {
          this.$store.dispatch("fetchMoviesById", id);
        });
      }
    },
    movie(value) {
      if (value) {
        this.movieArray.push(value);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.container {
  color: #fff;
}

.cinema-details-title {
  font-family: "Lato", serif;
  font-weight: 400;
}

.cinema-details-container {
  padding: 12px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 1%;
  left: 21%;
}

.cinema-background {
  position: relative;
  max-width: 100%;
  min-height: 400px;
  background: url("../../../../assets/background-cinema-details.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.hr {
  border-bottom: 2px solid black;
}

img {
  height: 300px;
  min-width: 200px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .cinema-details-container {
    left: 16%;
  }
}

@media (max-width: 990px) {
  .cinema-details-container {
    left: 6%;
  }
}

@media (max-width: 768px) {
  .cinema-details-text {
    font-size: 0.9rem;
  }
  .cinema-details-container {
    left: 0%;
    bottom: 10%;
  }
}

@media (max-width: 575px) {
  .movie-date-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
  }
}

@media (max-width: 550px) {
  .cinema-details-container {
    bottom: 15%;
  }
}

@media (max-width: 480px) {
  .cinema-details-container {
    bottom: 20%;
  }
}

@media (max-width: 425px) {
  h3 {
    font-size: 1.5rem;
  }
  .cinema-details-container {
    bottom: 22%;
    left: 0%;
  }
}

@media (max-width: 375px) {
  .cinema-details-container {
    bottom: 25%;
    left: 0%;
  }
}

@media (max-width: 320px) {
  .cinema-details-container {
    bottom: 28%;
    left: 0%;
  }
}
</style>
