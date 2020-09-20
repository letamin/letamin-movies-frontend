<template>
  <div class>
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-addPromotionConfirm" @ok="onModalOk">
      <template v-slot:modal-title>
        <div>
          <template>Confirming...</template>
        </div>
      </template>
      <div class>Are you sure you want to add this promotion?</div>
    </b-modal>

    <div class="container">
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
                v-model="addPromotion.name"
              />
            </div>
            <div class="form-group">
              <input
                type="url"
                id="image"
                class="form-control"
                placeholder="Image"
                v-model="addPromotion.image"
              />
            </div>
            <div class="form-group time-input">
              <label for="startTime">Start Time:</label>
              <input
                type="text"
                id="startTime"
                class="form-control"
                placeholder="Start Time"
                v-model="addPromotion.startTime"
              />
            </div>
            <div class="form-group time-input">
              <label for="endTime">End Time:</label>
              <input
                type="text"
                id="endTime"
                class="form-control"
                placeholder="End Time"
                v-model="addPromotion.endTime"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                id="description"
                class="form-control"
                placeholder="Description"
                v-model="addPromotion.description"
              />
            </div>
          </form>
          <button class="btn btn-success btn-edit" v-b-modal="`modal-addPromotionConfirm`">Add</button>
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
      addPromotion: {
        name: "",
        description: "",
        startTime: "",
        endTime: "",
        image: ""
      }
    };
  },
  beforeCreate() {
    if (!this.$store.state.login.token) {
      this.$router.replace("/");
    }
  },
  computed: {
    loading() {
      return this.$store.state.promotions.loading;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchPostPromotion", this.addPromotion);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.add-promotion-container {
  font-family: "Lato", sans-serif;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 10px;
}

.time-input {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

label {
  width: 25%;
}

@media (max-width: 667px) {
  .title {
    font-size: 35px;
  }

  form {
    grid-template-columns: repeat(1, 100%);
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
}

@media (max-width: 320px) {
  .title {
    font-size: 24px;
  }
}
</style>
