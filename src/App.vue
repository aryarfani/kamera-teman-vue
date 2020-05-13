<template>
  <div id="app">
    <Sidebar />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  }
};
</script>

// Global Style Only
<style>
.main {
  position: relative;
  margin-left: 190px;
}
img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
</style>
