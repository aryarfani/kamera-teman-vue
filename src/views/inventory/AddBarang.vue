<template>
  <div class="container mt-4 ">
    <h1>Add Barang</h1>

    <form action="#" method="post" @submit.prevent="store">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          id="nama"
          type="text"
          class="form-control"
          placeholder="Nama"
          v-model="form.nama"
        />
      </div>
      <div class="form-group">
        <label for="alamat">Stock</label>
        <input
          id="stock"
          v-model="form.stock"
          type="number"
          class="form-control"
          placeholder="Stock"
        />
      </div>
      <div class="form-group">
        <label for="phone">Biaya</label>
        <input
          id="phone"
          v-model="form.harga"
          type="number"
          class="form-control"
          placeholder="Biaya"
        />
      </div>
      <!-- Upload File -->
      <img alt="" class="img-thumbnail rounded" :src="gambarPlaceholder" />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="gambar"
            accept="image/*"
            ref="gambar"
            @change="onUpload"
          />
          <label class="custom-file-label" for="gambar">
            {{ namaFilePlaceholder }}
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        nama: "",
        stock: "",
        harga: ""
      },
      gambarPlaceholder:
        "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
      namaFilePlaceholder: "Pilih Gambar"
    };
  },
  methods: {
    async store() {
      // make new form
      let formData = new FormData();

      // if the password and re-password same

      formData.append("gambar", this.$refs.gambar.files[0]);
      formData.append("nama", this.form.nama);
      formData.append("stock", this.form.stock);
      formData.append("harga", this.form.harga);

      try {
        let res = await axios.post("/barang", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        if (res.status == 200) {
          this.$toasted.show("Menambah member berhasil", {
            type: "success",
            duration: 3000
          });
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    },
    onUpload() {
      const file = this.$refs.gambar.files[0];
      this.gambarPlaceholder = URL.createObjectURL(file);
      this.namaFilePlaceholder = this.$refs.gambar.files[0].name;
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
  object-fit: cover;
}
</style>
