<template setup>
  <img class="logo" src="../assets/restaurant-logo.jpg" alt="" />

  <h3>Login</h3>
  <div class="login">
    <input type="text" v-model="email" placeholder=" Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button style="--clr: #ffab00" v-on:click="login">
      <span>login</span><i></i>
    </button>

    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(13, 75, 100);
}
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: aliceblue;
  background-color: skyblue;
  cursor: pointer;
}
</style>
