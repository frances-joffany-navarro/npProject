<template>
  <div>
    <b-jumbotron
      class="header-background"
      text-variant="white"
      border-variant="dark"
    >
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-background {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    ),
    url("../../assets/images/eddy-klaus-BHNxfaeNCTI-unsplash.jpg");

  background-size: cover;
  height: 100vh;
}
</style>
