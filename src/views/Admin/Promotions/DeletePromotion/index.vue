<template>
  <div class>
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-promotionDeleteConfirm" @ok="onModalOk" v-if="promotion">
      <template v-slot:modal-title>
        <div>
          <template>Confirming...</template>
        </div>
      </template>
      <div>Are you sure you want to DELETE this promotion?</div>
    </b-modal>

    <div class="container position-relative" v-if="promotion">
      <div class="row mt-5">
        <div
          class="col-lg-8 mx-auto d-flex justify-content-between promotion-container"
        >
          <div class="col-lg-4 promotion-img">
            <h4 class="font-weight-bold">{{ promotion.name }}</h4>
            <img :src="promotion.image" alt="Promotion" />
          </div>
          <div class="col-lg-8 ml-3 promotion-description">
            <p>{{ promotion.description }}</p>
            <div class>
              <b-icon icon="calendar3" aria-hidden="true" class="mr-2"></b-icon>
              <span class="font-weight-bold">From:</span>
              {{ new Date(promotion.startTime).toString().slice(0, 24) }} -
              <span class="font-weight-bold">To:</span>
              {{ new Date(promotion.endTime).toString().slice(0, 24) }}
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-danger btn-delete"
        v-b-modal="`modal-promotionDeleteConfirm`"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from "../../../../components/NavbarAdmin";
import Loader from "../../../../components/Loader";

export default {
  components: {
    NavbarAdmin,
    Loader
  },
  created() {
    this.$store.dispatch("fetchPromotionById", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.promotions.loading;
    },
    promotion() {
      return this.$store.state.promotions.data;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchDeletePromotion", this.$route.params.id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

.container {
  font-family: "Raleway", sans-serif;
}

img {
  box-shadow: 3px 3px 3px #666;
  border: 1px solid #aba8a8;
  max-width: 100%;
}

.btn-delete {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 20px;
}

@media (max-width: 768px) {
  .promotion-container {
    flex-direction: column;
  }

  .promotion-description {
    margin-top: 20px;
    margin-left: 0px !important;
  }

  .promotion-img {
    margin: 0 auto;
  }
}
</style>
