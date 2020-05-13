<template>
  <div class="container mt-4">
    <div class="header d-flex justify-content-between">
      <h1>Inventory</h1>
      <router-link to="/add-barang" class="btn btn-primary align-self-center"
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
            <th>Stok</th>
            <th>Biaya</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(barang, index) in barangs" :key="barang.id">
            <th>{{ index + 1 }}</th>
            <td>
              <img :src="barang.gambar" alt="" />
            </td>
            <td>{{ barang.nama }}</td>
            <td>{{ barang.stock }}</td>
            <td>{{ barang.harga }}</td>
            <td>
              <router-link
                :to="{ name: 'editBarang', params: { id: barang.id } }"
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
      barangs: []
    };
  },
  methods: {
    async getbarang() {
      var res = await axios.get("/barang");
      if (res.status == 200) {
        this.barangs = res.data;
      }
    }
  },
  mounted() {
    this.getbarang();
  }
};
</script>
