<template>
  <div class="background-carousel">
    <Loader v-if="loading" />
    <div class="container custom-container" v-else>
      <div class="row">
        <div class="col-sm-10 mx-auto p-0">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="poster in listPosters" :key="poster._id">
              <template v-slot:img>
                <img class="d-block custom-img" :src="poster.url" />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../Loader";

export default {
  props: ["listPosters"],
  components: {
    Loader
  },
  computed: {
    loading() {
      return this.$store.state.posters.loading;
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.custom-img {
  transition: all 0.4s;
  margin: 0 auto;
  max-width: 100%;
}

.background-carousel {
  min-height: 795px;
  background: url("../../assets/background-cover.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

@media (max-width: 1366px) {
  .background-carousel {
    min-height: 700px;
  }

  .custom-img {
    height: 460px;
  }
}

@media (max-width: 1280px) {
  .background-carousel {
    min-height: 670px;
  }

  .custom-img {
    height: 440px;
  }
}

@media (max-width: 1080px) {
  .background-carousel {
    min-height: 600px;
  }

  .custom-img {
    height: 385px;
  }
}

@media (max-width: 900px) {
  .background-carousel {
    min-height: 566px;
  }

  .custom-img {
    height: 355px;
  }
}

@media (max-width: 800px) {
  .background-carousel {
    min-height: 530px;
  }
  .custom-img {
    height: 330px;
  }
}

@media (max-width: 767px) {
  .background-carousel {
    min-height: 515px;
  }
  .custom-img {
    height: 315px;
  }
}
@media (max-width: 568px) {
  .background-carousel {
    min-height: 495px;
  }
  .custom-img {
    height: 305px;
  }
}

@media (max-width: 480px) {
  .background-carousel {
    min-height: 470px;
  }
  .custom-img {
    height: 285px;
  }
}

@media (max-width: 450px) {
  .background-carousel {
    min-height: 460px;
  }
}

@media (max-width: 426px) {
  .background-carousel {
    min-height: 450px;
  }
  .custom-img {
    height: 275px;
  }
}

@media (max-width: 375px) {
  .background-carousel {
    min-height: 420px;
  }
  .custom-img {
    height: 200px;
  }
}

@media (max-width: 320px) {
  .background-carousel {
    min-height: 370px;
  }
}
</style>
