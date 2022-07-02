<template>
  <img class="logo" src="../assets/restaurant-logo.jpg" alt="" />
  <h3>Sign Up</h3>
  <div class="register">
    <input type="text" v-model="name" placeholder=" EnterName" />
    <span v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</span>

    <input type="text" v-model="email" placeholder="Enter Email" />
    <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>

    <input type="password" v-model="password" placeholder="Enter Password" />
    <span v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</span><br>

        <button style="--clr: #fa1a0a" v-on:click="signUp"><span>Sign-Up</span><i></i>
    </button>
<p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength} from '@vuelidate/validators'
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {v$:useValidate(), name: "", email: "", password: "" };
  },
  validations(){
    return{
        name: {required},
         email: {required,email}, 
         password: {required,minLength:minLength(8)},
    }
  },
  methods: {
    async signUp() {
       console.warn("signUp", this.name, this.email, this.password);
      this.v$.$validate()
      if (!this.v$.$error){ 


      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        
      });
      

     
      // console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
      }else{
        alert('Add Required Fields First')
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
.register input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button,
.add button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: aliceblue;
  background-color: skyblue;
  cursor: pointer;
}
</style>
