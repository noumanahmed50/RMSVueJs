<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="addrestu">Add Resturent</router-link>
    <router-link to="aboutus">About Us</router-link>
    <a v-on:click="logout" href="#"> Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
.nav {
  background-color: rgb(38, 44, 44);
  overflow: hidden;
}
.nav a {
  float: left;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px, 14px;
  text-decoration: none;
  font-size: 16px;
  margin: 12px;
}
.nav a:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(158, 145, 98);
}
</style>
