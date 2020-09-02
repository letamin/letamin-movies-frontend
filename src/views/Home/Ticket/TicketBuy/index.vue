<template>
  <div class="container text-center mt-4">
    <Loader v-if="loading" />

    <b-modal id="modal-ticketConfirm" @ok="onModalOk">
      <template v-slot:modal-title>
        <div v-if="ticket && ticket.seatCodes.length != 0 && movie">
          <template>Please confirm your ticket information:</template>
        </div>
        <template v-else>Error</template>
      </template>
      <div v-if="ticket && ticket.seatCodes.length != 0 && movie">
        <div class="font-weight-normal">
          <br />
          <span class="font-weight-bold">Movie:</span>
          {{movie.name}} -
          <span class="font-weight-bold">Time:</span>
          {{ticket.date.slice(0, 24 )}}
          <br />
          <span class="font-weight-bold">Seat(s):</span>
          {{ticket.seatCodes.join(', ')}}
        </div>
      </div>
      <div v-else>Please choose your seat</div>
    </b-modal>

    <div class="mt-4" v-if="movie">
      <div class="row">
        <div class="col-sm-4 text-center">
          <div class="movie-container">
            <h3 class="movie-name">{{movie.name}}</h3>
            <img :src="movie.poster" alt="movie poster" />
            <h4 class="movie-time mt-2">{{date.slice(0,24)}}</h4>
          </div>
          <button class="btn btn-success mt-2 btn-buy" v-b-modal="`modal-ticketConfirm`">Buy Ticket</button>
        </div>

        <div class="col-sm-8">
          <div class="screen">SCREEN</div>
          <div class="d-flex justify-content-center align-items-center position-relative">
            <div class="seat-container mt-2">
              <template v-for="seat in listSeats" class>
                <Seat
                  :key="seat.code"
                  :seat="seat"
                  @eventSeatSelect="handleEventSeatSelect($event)"
                />
              </template>
            </div>
            <div class="mt-3 ml-2 font-weight-bold text-exit">Exit ➞</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";
import Seat from "./seat";

export default {
  components: {
    Loader,
    Seat
  },
  data() {
    return {
      movie: null,
      date: "",
      listSeats: [],
      seatCodes: [],
      ticket: null,
      modalShow: false
    };
  },
  created() {
    this.$store.dispatch("fetchMoviesById", this.$route.params.id);
    this.date = this.$route.params.time;
  },
  computed: {
    _movie() {
      return this.$store.state.movies.data;
    },
    loading() {
      return this.$store.state.movies.loading;
    }
  },
  methods: {
    onModalOk() {
      if (this.ticket) {
        this.$store.dispatch("fetchTicket", this.ticket);
      }
    },
    handleEventSeatSelect(seat) {
      if (!this.seatCodes.includes(seat)) {
        this.seatCodes.push(seat);
      } else if (this.seatCodes.includes(seat)) {
        for (let i = 0; i < this.seatCodes.length; i++) {
          if (this.seatCodes[i] == seat) {
            this.seatCodes.splice(i, 1);
          }
        }
      }

      const ticketObj = {
        movieId: this.$route.params.id,
        seatCodes: this.seatCodes,
        date: this.$route.params.time,
        cinemaId: this.$route.params.cinema
      };

      this.ticket = ticketObj;
    }
  },
  watch: {
    _movie(movie) {
      if (movie) {
        this.movie = movie;
        this.listSeats = movie.dates.filter(
          movieDate => movieDate.date == this.date
        )[0].seats;
      }
    }
  }
};
</script>

<style scoped>
.modal-body {
  display: none;
  padding: 0;
}

img {
  max-width: 100%;
}

.seat-container {
  display: grid;
  grid-template-columns: repeat(12, 50px);
  overflow: auto;
  padding-bottom: 10px;
}

.movie-time {
  padding: 5px;
  border-radius: 10px;
}

.movie-container {
  padding: 5px;
  background: rgba(1, 1, 1, 0.6);
  color: white;
}

.screen {
  color: white;
  padding: 10px;
  font-weight: bold;
  background: rgba(1, 1, 1, 0.6);
  border-radius: 20% 20% 0 0;
}

.btn-buy {
  width: 120px;
}

.text-exit {
  align-self: flex-start;
  border-right: 2px solid black;
  padding: 5px;
}

.exit-arrow {
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .movie-time,
  .movie-name {
    font-size: 1.2rem;
  }

  .seat-container {
    grid-template-columns: repeat(12, 45px);
  }
}

@media (max-width: 575px) {
  .col-sm-8 {
    margin-top: 20px;
  }
}

@media (max-width: 425px) {
  .seat-container {
    grid-template-columns: repeat(12, 38px);
  }
}
</style>