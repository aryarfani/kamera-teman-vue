<template>
  <div class="container mt-4 ">
    <h1>Transaksi</h1>

    <div class="shadow p-3">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Durasi</th>
            <th>Tanggal Tempo</th>
            <th>Biaya</th>
            <th>Peminjam</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaksi, index) in transaksis" :key="transaksi.id">
            <th>{{ index + 1 }}</th>
            <td>{{ transaksi.nama }}</td>
            <td>{{ transaksi.durasi + " hari" }}</td>
            <template v-if="transaksi.status == 1">
              <td>{{ transaksi.tanggal_tempo }}</td>
            </template>

            <template v-else>
              <td>Belum dikonfirmasi</td>
            </template>

            <td>{{ transaksi.harga }}</td>
            <td>{{ transaksi.nama_member }}</td>
            <td>
              <p class="badge badge-warning" v-if="transaksi.status == 0">
                Konfirmasi
              </p>
              <p class="badge badge-success" v-if="transaksi.status == 1">
                Dipinjam
              </p>
              <p class="badge badge-danger" v-if="transaksi.status == 3">
                Dibatalkan
              </p>
            </td>
            <template v-if="transaksi.status == 0">
              <td>
                <button
                  @click="confirmBarang(transaksi.riwayat_id)"
                  class="btn btn-success"
                >
                  ✓
                </button>
                |
                <button
                  @click="deleteBarang(transaksi.riwayat_id)"
                  class="btn btn-danger"
                >
                  x
                </button>
              </td>
            </template>
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
      transaksis: []
    };
  },
  methods: {
    async getTransaksi() {
      var res = await axios.get("/riwayat");
      if (res.status == 200) {
        this.transaksis = res.data;
      }
    },
    async confirmBarang(id) {
      if (confirm("Anda ingin mengkonfirmasi ini ?")) {
        var res = await axios.get(`/barang/${id}/confirm`);
        if (res.status == 200) {
          this.$toasted.show("Barang berhasil dikonfirmasi", {
            type: "error",
            duration: 3000
          });
        }
      }
    },
    async deleteBarang(id) {
      if (confirm("Anda ingin menghapus barang ini ?")) {
        var res = await axios.get(`/barang/${id}/delete`);
        if (res.status == 200) {
          this.$toasted.show("Barang berhasil dihapus", {
            type: "error",
            duration: 3000
          });
        }
      }
    }
  },
  mounted() {
    this.getTransaksi();
  }
};
</script>

<style></style>
