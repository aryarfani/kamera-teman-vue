<template>
  <div class="px-5 mt-3">
    <h1>Dashboard</h1>

    <!-- Menu Card -->
    <div class="mt-4 row">
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row">
            <div class="col px-5 py-2">
              <h4>Transaksi</h4>
              <p>{{ transaksi || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                storage
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row">
            <div class="col px-5 py-2">
              <h4>Inventory</h4>
              <p>{{ barang || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                store_mall_directory
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row">
            <div class="col px-5 py-2">
              <h4>Member</h4>
              <p>{{ members || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                group
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row">
            <div class="col px-5 py-2">
              <h4>Admins</h4>
              <p>{{ admins || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                group_work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Menu Card -->

    <div class="container logo mt-3">
      <img src="@/assets/gambar_camera.svg" alt="Logo Kamera" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      admins: "",
      members: "",
      barang: "",
      transaksi: ""
    };
  },
  methods: {
    async getData() {
      let dataAdmin = await axios.get("/admin");
      let dataMember = await axios.get("/member");
      let dataBarang = await axios.get("/barang");
      let dataTransaksi = await axios.get("/riwayat");

      this.admins = dataAdmin.data.length;
      this.members = dataMember.data.length;
      this.barang = dataBarang.data.length;
      this.transaksi = dataTransaksi.data.length;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.kartu {
  border-left: 0.25rem solid #4e73df !important;
}
.material-icons {
  font-size: 40px !important;
  color: #dddfeb !important;
}

.logo {
  width: 45vw;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
