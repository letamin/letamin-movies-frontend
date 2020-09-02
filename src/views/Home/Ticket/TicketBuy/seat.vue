<template>
  <button
    class="btn seat"
    :class="{'seatSelect': statusSeat, 'seatBooked': seat.isBooked}"
    :disabled="seat.isBooked"
    @click="handleSeatSelect"
  >{{seat.code}}</button>
</template>

<script>
export default {
  props: ["seat"],
  data() {
    return {
      statusSeat: false
    };
  },
  methods: {
    handleSeatSelect() {
      this.statusSeat = !this.statusSeat;
      this.$emit("eventSeatSelect", this.seat.code);
    }
  }
};
</script>

<style scoped>
.seat {
  background-color: gray;
  width: 46px;
  color: white;
  margin: 4px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  border: none;
}

.seatSelect {
  background-color: green;
}

.seatBooked {
  background-color: #ff0015;
  cursor: no-drop;
}

.btn:disabled {
  opacity: 1;
}

@media (max-width: 768px) {
  .seat {
    font-size: 12px;
    width: 42px;
    margin: 2px;
  }
}

@media (max-width: 425px) {
  .seat {
    font-size: 10px;
    width: 36px;
    margin: 1px;
  }
}
</style>