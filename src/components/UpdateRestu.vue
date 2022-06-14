<template>
  <Header />
  <h2>Welcome to Update Resturent Page</h2>
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
      <button style="--clr: #1e9bff" type="button" v-on:click="updateResturent">
        <span>Update Resturent</span><i></i>
      </button>
    </form>
</template>
<script>
import Header from "./Header.vue";
import axios from 'axios';
export default {
  name: "UpdateRestu",
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
  methods:{
      async updateResturent(){
        
      const result= await axios.put("http://localhost:3000/resturent/"+this.$route.params.id,{
        name:this.resturent.name,
        address:this.resturent.address,
        contact:this.resturent.contact
      });
      if(result.status==200){
        this.$router.push({name:"Home"});
      }
      }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get("http://localhost:3000/resturent/"+this.$route.params.id);
    this.resturent=result.data;
  },
};
</script>
