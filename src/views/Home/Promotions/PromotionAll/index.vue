<template>
  <div class="container">
    <Loader v-if="loading" />
    <h3 class="promotions-title mt-5">Promotions</h3>
    <div class="row" v-if="promotions">
      <div class="mx-auto mt-4 promotions-container">
        <b-link
          v-for="promotion in promotions"
          :key="promotion._id"
          :to="`/promotions/details/${promotion._id}`"
        >
          <b-card
            :img-src="promotion.image"
            img-alt="Card Image"
            class="position-relative"
            style="max-width:15rem;"
          >
            <b-card-text class="card-text">
              <b-icon icon="calendar3" aria-hidden="true" class="mr-2"></b-icon>
              {{new Date(promotion.startTime).toDateString().slice(4)}} - {{new Date(promotion.endTime).toDateString().slice(4)}}
            </b-card-text>
          </b-card>
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchAllPromotions");
  },
  computed: {
    promotions() {
      return this.$store.state.promotions.data;
    },
    loading() {
      return this.$store.state.promotions.loading;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.promotions-title {
  font-size: 56px;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  font-family: "Lato", sans-serif;
  line-height: 1.1;
}

.promotions-container {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;
}

.card-text {
  font-size: 14px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  opacity: 0.8;
}

.card {
  box-shadow: 3px 3px 3px #666;
  border: 1px solid #aba8a8;
}

@media (max-width: 1280px) {
  .promotions-container {
    grid-template-columns: repeat(3, auto);
  }
}

@media (max-width: 1080px) {
  .promotions-title {
    font-size: 51px;
  }
}

@media (max-width: 800px) {
  .promotions-title {
    font-size: 48px;
  }

  .promotions-container {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 667px) {
  .promotions-title {
    font-size: 43px;
  }
}

@media (max-width: 550px) {
  .promotions-container {
    grid-template-columns: repeat(1, auto);
  }
}

@media (max-width: 480px) {
  .promotions-title {
    font-size: 40px;
  }
}

@media (max-width: 450px) {
  .promotions-title {
    font-size: 35px;
  }
}

@media (max-width: 320px) {
  .promotions-title {
    font-size: 32px;
  }
}
</style>