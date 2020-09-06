<template>
  <div class="edit-movie-container">
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-addMovieConfirm" @ok="onModalOk">
      <template v-slot:modal-title>
        <div v-if="movie">
          <template>Confirming...</template>
        </div>
      </template>
      <div>Are you sure you want to add this movie?</div>
    </b-modal>

    <b-modal id="modal-dates">
      <template v-slot:modal-title>
        <div v-if="movie">
          <template>Dates:</template>
        </div>
      </template>
      <div v-if="dateArray">
        <div class v-for="(date, index) in dateArray" :key="index">{{index+1}}. {{date}}</div>
      </div>
    </b-modal>

    <div class="container" v-if="movie">
      <h3 class="text-center mt-4 title">Adding...</h3>
      <div class="row mt-4">
        <div class="col-lg-10 mx-auto text-center position-relative">
          <form @submit.prevent>
            <div class="form-group">
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Name"
                v-model="editMovie.name"
              />
            </div>
            <div class="form-group d-flex justify-content-between">
              <input
                type="text"
                id="name"
                class="form-control input-date"
                placeholder="Date"
                v-model="date"
              />
              <div v-b-modal="`modal-dates`" class="btn-date m-1">
                <b-icon icon="info-square" aria-hidden="true" class="h4"></b-icon>
              </div>
              <div @click="addDate" class="btn-date m-1">
                <b-icon icon="plus-square" aria-hidden="true" class="h4"></b-icon>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Trailer"
                v-model="editMovie.trailer"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Poster"
                v-model="editMovie.poster"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Promotion"
                v-model="editMovie.promotion"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Genre"
                v-model="editMovie.genre"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Status"
                v-model="editMovie.status"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Rated"
                v-model="editMovie.rated"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                id="province"
                class="form-control"
                placeholder="Price"
                v-model="editMovie.price"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Language"
                v-model="editMovie.language"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                id="province"
                class="form-control"
                placeholder="Time"
                v-model="editMovie.time"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                id="description"
                lass="form-control"
                placeholder="Description"
                v-model="editMovie.description"
              />
            </div>
          </form>
          <button class="btn btn-success btn-edit" v-b-modal="`modal-addMovieConfirm`">Add</button>
        </div>
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
  data() {
    return {
      dateArray: [],
      date: "",
      editMovie: {
        name: "",
        description: "",
        trailer: "",
        poster: "",
        genre: "",
        status: "",
        promotion: "",
        rated: "",
        price: "",
        language: "",
        time: ""
      }
    };
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
      this.editMovie.dates = this.dateArray;
      this.$store.dispatch("fetchPostMovie", this.editMovie);
    },
    addDate() {
      if (this.date) {
        this.dateArray.push(this.date);
        this.date = "";
      }
    }
  },
  watch: {
    movie(value) {
      this.editMovie = value;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.edit-movie-container {
  font-family: "Lato", sans-serif;
}

textarea {
  width: 100%;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 10px;
}

.title {
  font-family: "Lato", sans-serif;
  font-size: 40px;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  line-height: 1.1;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 10px;
}

.btn-edit {
  position: absolute;
  width: 100px;
  right: 0;
}

.input-date {
  width: 80%;
}

.btn-date {
  width: 8%;
  cursor: pointer;
  outline: none;
  border: none;
}

@media (max-width: 667px) {
  .title {
    font-size: 35px;
  }

  form {
    grid-template-columns: repeat(1, 100%);
  }

  .btn-edit {
    right: 10%;
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

  .btn-date {
    padding: 5px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 24px;
  }
}
</style>