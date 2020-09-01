<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-6 mx-auto confirm-container text-center" v-if="ticket && cinema && movie">
        <h3>Thank you,</h3>
        <p class="mt-3">
          Your ticket has been confirmed, please check your email address.
          <br />
          <span>
            <span class="font-weight-bold">Cinema:</span>
            {{cinema.name}} -
            <span class="font-weight-bold">Movie:</span>
            {{movie.name}}
          </span>
          <br />
          <span class="font-weight-bold">Date:</span>
          {{date}} -
          <span class="font-weight-bold">Seat:</span>
          <span v-for="seat in ticket.seatCodes" :key="seat._id">{{' ' + seat.code}}</span>
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
      ticket: null,
      date: null
    };
  },
  created() {
    this.ticket = this.$store.state.ticket.data;
  },
  computed: {
    movie() {
      return this.$store.state.movies.data;
    },
    cinema() {
      return this.$store.state.cinemas.data;
    }
  },
  watch: {
    ticket(value) {
      if (value) {
        this.$store.dispatch("fetchMoviesById", this.ticket.movieId);
        this.$store.dispatch("fetchCinemaById", this.ticket.cinemaId);
        this.date = new Date(this.ticket.date);
        this.date = this.date.toString().slice(0, 24);
      }
    }
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