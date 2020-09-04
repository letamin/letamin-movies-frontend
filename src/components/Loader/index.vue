<template>
  <div class="custom-spinner">
    <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custom-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
