<template>
  <Header />

  <div class="addRestu">
    <form class="add">
      <input
        type="text"
        placeholder="Hotel Name"
        v-model="resturent.name"
        name="name"
      />
      <input
        type="text"
        placeholder="Hotel Address"
        v-model="resturent.address"
        name="address"
      />
      <input
        type="text"
        placeholder="Hotel Contact"
        v-model="resturent.contact"
        name="contact"
      />
      <button style="--clr: #1e9bff" type="button" v-on:click="addResturent">
        <span>Add Resturent</span><i></i>
      </button>
      <!-- <a  href="" style="--clr: #1e9bff"><span>Press Me</span><i></i></a> -->
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from 'axios';
export default {
  name: "AddRestu",
  components: {
    Header,
  },
  data() {
    return {
      resturent: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addResturent() {
      console.warn(this.resturent);
      const result= await axios.post("http://localhost:3000/resturent",{
        name:this.resturent.name,
        address:this.resturent.address,
        contact:this.resturent.contact
      });
      if(result.status==201){
        this.$router.push({name:"Home"});
      }
      console.warn("result",result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style>
* {
}
.addRestu {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 60px;
  margin: 0;
  padding: 0;
  font-family: "popins", sans-serif;
  background: #92a15510;
}
button {
  position: relative;
  background: rgb(122, 108, 108);
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
}
button:hover {
  letter-spacing: 0.25em;
  background: var(--clr);
  color: var(--clr);
  box-shadow: 0 0 35px var(--clr);
}
button::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #27282c;
}
button span {
  position: relative;
  z-index: 1;
}
button i {
  position: absolute;
  inset: 0;
  display: block;
}
button i::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: 80px;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #27282c;
  transform: translate(-50%);
  transition: 0.5s;
}
button:hover i::before {
  width: 20px;
  left: 20%;
}
button i::after {
  content: "";
  position: absolute;
  bottom: -3.5px;
  left: 20px;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #413b3b;
  transform: translate(-50%);

  transition: 0.5s;
}
button:hover i::after {
  width: 20px;
  left: 80%;
}
</style>
