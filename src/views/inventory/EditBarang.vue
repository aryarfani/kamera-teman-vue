<template>
  <div class="container mt-4">
    <div class="header d-flex justify-content-between">
      <h1>Edit Barang</h1>
      <button @click="deleteBarang" class="btn btn-danger align-self-center">
        x
      </button>
    </div>

    <form action="#" method="post" @submit.prevent="updateBarang">
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
      barang: [],
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
    // to get barang based on id given by param from route
    async getBarang() {
      const id = this.$route.params.id;
      try {
        let res = await axios.get("/barang/" + id);
        if (res.status == 200) {
          this.form = res.data;
          this.form.password = "";
          this.gambarPlaceholder = res.data["gambar"];
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateBarang() {
      // make new form
      let formData = new FormData();

      // if the picture is not updated
      // it will insert "gambar_lama" request with gambar from barang data
      // else it will insert new picture in gambar request
      if (this.$refs.gambar.files[0] != undefined) {
        formData.append("gambar", this.$refs.gambar.files[0]);
      } else {
        formData.append("gambar_lama", this.gambarPlaceholder);
      }
      formData.append("nama", this.form.nama);
      formData.append("harga", this.form.harga);
      formData.append("stock", this.form.stock);

      try {
        let res = await axios.post(
          "/barang/" + this.$route.params.id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        if (res.status == 200) {
          this.$toasted.show("Berhasil mengupdate barang", {
            type: "success",
            duration: 3000
          });
          this.$router.push("/barang");
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    },
    // function to set picture and name to element after inputing picture
    onUpload() {
      const file = this.$refs.gambar.files[0];
      this.gambarPlaceholder = URL.createObjectURL(file);
      this.namaFilePlaceholder = this.$refs.gambar.files[0].name;
    },
    // function to delete barang
    async deleteBarang() {
      try {
        var res = await axios.post("/barang/" + this.$route.params.id, {
          _method: "delete"
        });
        if (res.status == 200) {
          this.$toasted.show("Barang deleted", {
            type: "success",
            duration: 3000
          });
          this.$router.push("/inventory");
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    }
  },
  mounted() {
    this.getBarang();
  }
};
</script>

<style scoped>
img {
  width: 200px;
  object-fit: cover;
}
</style>
