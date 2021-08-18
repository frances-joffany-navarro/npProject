<template>
  <div class="container-fluid">
    <b-navbar
      toggleable="lg"
      variant="transparent"
      type="dark"
      fixed="top"
      class="p-5"
    >
      <b-navbar-brand tag="h1" class="mb-0 me-5" href="/"
        >Artisan</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about" class="m-2">About</b-nav-item>
          <b-nav-item href="#" class="m-2">Create New Event</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#" class="m-2">Sign In</b-nav-item>
          <b-nav-item href="#" class="m-2">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  color: #fff;
}
.navbar-brand {
  font-family: "Parisienne", cursive;
  font-size: 50px;
}
ul li a {
  font-family: "Open Sans", sans-serif;
}

.navbar-brand,
ul li a {
  color: #fff;
}

ul li a:hover,
ul li a:focus {
  border: 1px solid #fff;
  color: #fff;
}

#nav-collapse {
  color: #fff;
}
</style>
