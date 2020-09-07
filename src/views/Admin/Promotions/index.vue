<template>
  <div class>
    <Loader v-if="loading" />

    <div class="mt-4 d-flex justify-content-center">
      <b-form-input
        size="sm"
        class="mr-sm-2 w-25 search-box"
        placeholder="Search"
        v-model="searchTerm"
      ></b-form-input>
      <a href="/admin/promotions/add">
        <button class="btn btn-success btn-add">Add</button>
      </a>
    </div>

    <div class="container">
      <h3 class="promotions-title mt-3">Promotions</h3>
      <div class="row" v-if="promotions">
        <div class="mx-auto mt-4 promotions-container">
          <div v-for="promotion in filteredPromotions" :key="promotion._id">
            <b-card
              :img-src="promotion.image"
              img-alt="Card Image"
              class="position-relative"
              style="max-width:15rem;"
            >
              <b-card-text class="card-text">
                <b-icon icon="calendar3" aria-hidden="true" class="mr-2"></b-icon>
                {{new Date(promotion.startTime).toDateString().slice(4)}} - {{new Date(promotion.endTime).toDateString().slice(4)}}
                <div class="btn-container">
                  <a :href="`/admin/promotions/edit/${promotion._id}`">
                    <button class="btn btn-success btn-edit">Edit</button>
                  </a>
                  <a :href="`/admin/promotions/delete/${promotion._id}`">
                    <button class="btn btn-danger btn-delete">Delete</button>
                  </a>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>
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
      searchTerm: ""
    };
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
    },
    filteredPromotions() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, "gi");
        return this.promotions.filter(promotion =>
          promotion.name.match(regexp)
        );
      }
      return this.promotions;
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

.btn-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}

.container {
  padding-bottom: 30px;
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

  .search-box {
    width: 50% !important;
  }

  .btn-add {
    margin-left: 20px;
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