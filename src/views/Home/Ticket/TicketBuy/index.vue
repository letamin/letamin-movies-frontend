<template>
  <div class="container text-center mt-4">
    <Loader v-if="loading" />

    <div class="mt-4" v-if="movie">
      <div class="row">
        <div class="col-sm-4 text-center">
          <div class="movie-container">
            <h3 class="movie-name">{{movie.name}}</h3>
            <img :src="movie.poster" alt="movie poster" />
            <h4 class="movie-time mt-2">{{date.slice(0,24)}}</h4>
          </div>
          <button class="btn btn-success mt-2 btn-buy" @click="ticketConfirm">Buy Ticket</button>
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
    handleEventSeatSelect(seat) {
      this.seatCodes.push(seat);
      const ticketObj = {
        movieId: this.$route.params.id,
        seatCodes: this.seatCodes,
        date: this.$route.params.time,
        cinemaId: this.$route.params.cinema
      };

      this.ticket = ticketObj;
    },
    ticketConfirm() {
      if (this.ticket) {
        this.$bvModal
          .msgBoxConfirm(
            `Please confirm your ticket information: 
          Movie: ${this.movie.name} - Time: ${this.ticket.date.slice(
              0,
              24
            )} - Seat(s): ${this.ticket.seatCodes}`,
            {
              title: "Ticket Confirmation",
              size: "md",
              buttonSize: "sm",
              okVariant: "success",
              okTitle: "Ok",
              cancelTitle: "Cancel",
              footerClass: "p-2",
              hideHeaderClose: false,
              centered: true
            }
          )
          .then(() => {
            this.$store.dispatch("fetchTicket", this.ticket);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$bvModal.msgBoxConfirm(`Please choose your seat`, {
          title: "Ticket Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          okTitle: "Ok",
          cancelTitle: "Cancel",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        });
      }
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
}

.btn-buy {
  width: 120px;
}

.text-exit {
  align-self: flex-start;
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