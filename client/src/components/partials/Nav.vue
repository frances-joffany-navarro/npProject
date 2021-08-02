<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" variant="white" type="white">
      <b-navbar-brand tag="h1" class="mb-0" href="/" >Artisan</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="#">Create New Event</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#">Sign In</b-nav-item>
          <b-nav-item href="#">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
