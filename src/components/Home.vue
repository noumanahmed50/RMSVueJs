<template>
  <Header />
  <h2>Welcome {{ name }} to Home Page</h2>
  <table border="1px" class="table">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Action</td>
      <td>Action</td>

    </tr>
    <tr v-for="item in resturents" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td><router-link :to="'/updaterestu/' + item.id">Update</router-link></td>
 
<td>
      <button style="--clr: #ffab00" v-on:click="deleteResturent(item.id)">
      <span>Delete</span><i></i>
    </button>
    </td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      resturents: [],
    };
  },
  components: {
    Header,
  },
  methods:{
    async deleteResturent(id)
    {
    let result = await axios.delete("http://localhost:3000/resturent/"+id);
      if(result.status==200)
      {
        this.loadData()
      }
    },

    async loadData()
    {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) 
    {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/resturent");
    console.warn(result);
    this.resturents = result.data;
    }
  },

  mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
  text-align: center;
}
.table {
  text-align: center;
}
</style>
