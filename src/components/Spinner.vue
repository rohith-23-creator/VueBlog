<template>
  <div class="spinner"></div>
</template>
<script>
export default {};
</script>
<style>
.spinner {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #64ffda;
  border-bottom-color: #64ffda;
  animation: rotate 1s ease infinite;
}

@keyframes rotate {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
