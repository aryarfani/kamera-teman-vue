<template>
  <div class="sidebar">
    <div class="left-sidebar">
      <ul class="nav flex-column sidebar-nav">
        <li class="navbar-brand" id="brand">
          <router-link
            exact
            to="/"
            class="nav-link d-flex flex-column justify-content-center"
          >
            <span class="material-icons">
              camera_alt
            </span>
            <p>Kamera Teman</p>
          </router-link>
        </li>
        <li class="nav-item divider pr-2">
          <hr />
        </li>
        <li class="nav-item mt-3">
          <router-link to="/transaksi" class="nav-link d-inline-flex">
            <span class="mr-2 material-icons">
              storage
            </span>
            Transaksi
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/inventory" class="nav-link d-inline-flex" href="#">
            <span class="mr-2 material-icons">
              store_mall_directory
            </span>
            Inventory
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/member" class="nav-link d-inline-flex" href="#">
            <span class="mr-2 material-icons">
              group
            </span>
            Member
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/admin" class="nav-link d-inline-flex" href="#">
            <span class="mr-2 material-icons">
              group_work
            </span>
            Admins
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/laporan" class="nav-link d-inline-flex" href="#">
            <span class="mr-2 material-icons">
              assignment
            </span>
            Laporan
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#brand span {
  font-size: 50px;
  transform: rotate(18deg);
  color: rgb(255, 255, 255);
}
#brand p {
  color: rgb(255, 255, 255);
}
hr {
  border: 1px solid rgba(255, 255, 255, 0.596);
}
.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  padding: 70px 0 0 10px;
  background-color: #2f55c8f6;
  border-right: 1px solid #d3d3d3;
}

.left-sidebar {
  position: sticky;
  font-size: 14px;
  top: 0;
  height: calc(100vh - 70px);
}

.sidebar-nav li .nav-link {
  color: rgba(255, 255, 255, 0.76);
  font-weight: 500;
}

.sidebar-nav li .nav-link:hover {
  color: rgb(255, 255, 255);
}

.sidebar-nav li .active {
  color: rgb(255, 255, 255);
}
</style>
