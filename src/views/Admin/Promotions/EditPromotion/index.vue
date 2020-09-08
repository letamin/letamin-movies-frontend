<template>
  <div class="edit-promotion-container">
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-editPromotionConfirm" @ok="onModalOk">
      <template v-slot:modal-title>
        <div v-if="promotion">
          <template>Confirming...</template>
        </div>
      </template>
      <div class>Are you sure you want to edit this promotion?</div>
    </b-modal>

    <div class="container" v-if="promotion">
      <h3 class="text-center mt-4 title">Editing...</h3>
      <div class="row mt-4">
        <div class="col-lg-10 mx-auto text-center position-relative">
          <form @submit.prevent>
            <div class="form-group">
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Name"
                v-model="editPromotion.name"
              />
            </div>
            <div class="form-group">
              <input
                type="url"
                id="image"
                class="form-control"
                placeholder="Image"
                v-model="editPromotion.image"
              />
            </div>
            <div class="form-group time-input">
              <label for="startTime">Start Time:</label>
              <input
                type="text"
                id="startTime"
                class="form-control"
                placeholder="Start Time"
                v-model="editPromotion.startTime"
              />
            </div>
            <div class="form-group time-input">
              <label for="endTime">End Time:</label>
              <input
                type="text"
                id="endTime"
                class="form-control"
                placeholder="End Time"
                v-model="editPromotion.endTime"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                id="description"
                class="form-control"
                placeholder="Description"
                v-model="editPromotion.description"
              />
            </div>
          </form>
          <button
            class="btn btn-success btn-edit"
            v-b-modal="`modal-editPromotionConfirm`"
          >
            Edit
          </button>
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
    NavbarAdmin,
    Loader
  },
  data() {
    return {
      editPromotion: {
        name: "",
        image: "",
        description: "",
        startTime: "",
        endTime: ""
      }
    };
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
      this.$store.dispatch("fetchEditPromotion", {
        _id: this.$route.params.id,
        promotion: this.editPromotion
      });
    }
  },
  watch: {
    promotion(value) {
      value.startTime = new Date(value.startTime).toString().slice(0, 33);
      value.endTime = new Date(value.endTime).toString().slice(0, 33);
      this.editPromotion = value;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.edit-promotion-container {
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
}

@media (max-width: 320px) {
  .title {
    font-size: 24px;
  }
}
</style>
