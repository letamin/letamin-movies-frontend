<template>
  <div class="movie-details mt-3">
    <b-link
      v-for="(date, index) in dates"
      :key="index"
      :to="`/ticket/${movie._id}/${date.date}/${cinema._id}`"
    >
      <div class="movie-date">
        <span class="movie-weekdate">{{ date.date.slice(0, 3) }}</span>
        <em>{{ date.date.slice(4, 7) }}</em>
        <strong>{{ date.date.slice(8, 10) }}</strong>
        <span class="movie-time">{{ date.date.slice(15, 24) }}</span>
      </div>
    </b-link>
  </div>
</template>

<script>
export default {
  props: ["dates", "movie", "cinema"]
};
</script>

<style scoped>
.movie-date {
  position: relative;
  color: black;
  border: 2px solid #222;
  border-radius: 10px;
  background: #fff;
  width: 110px;
  height: 50px;
  cursor: pointer;
}

.movie-date:hover {
  opacity: 0.8;
}

.movie-weekdate,
em,
strong {
  position: absolute;
  left: 42px;
  font-size: 14px;
}

em {
  font-style: normal;
  left: 75px;
}

strong {
  font-size: 32px;
  font-weight: normal;
  left: 5px;
  line-height: 32px;
  top: 6px;
}

.movie-time {
  top: 20px;
  left: 42px;
  position: absolute;
}

.movie-details {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-row-gap: 10px;
}

@media (max-width: 970px) {
  .movie-details {
    grid-template-columns: repeat(3, 120px);
  }
}

@media (max-width: 768px) {
  .movie-details {
    grid-template-columns: repeat(2, 120px);
  }
}
</style>
