<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
