<template>
  <div class="container mt-4 ">
    <div class="header d-flex justify-content-between">
      <h1>Members</h1>
      <router-link to="/add-member" class="btn btn-primary align-self-center"
        >+</router-link
      >
    </div>
    <div class="shadow p-3">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="member.id">
            <th>{{ index + 1 }}</th>
            <td><img :src="member.gambar" alt="" /></td>
            <td>{{ member.nama }}</td>
            <td>{{ member.alamat }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'editMember', params: { id: member.id } }"
                class="btn btn-warning"
                >Edit</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      members: []
    };
  },
  methods: {
    async getMember() {
      var res = await axios.get("/member");
      if (res.status == 200) {
        this.members = res.data;
      }
    }
  },
  mounted() {
    this.getMember();
  }
};
</script>

<style></style>
