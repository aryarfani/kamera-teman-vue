import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";

import Transaksi from "@/views/transaksi/Transaksi.vue";
import Laporan from "@/views/laporan/Laporan.vue";

import Member from "@/views/member/Member.vue";
import AddMembers from "@/views/member/AddMember.vue";
import EditMember from "@/views/member/EditMember.vue";

import Admin from "@/views/admin/Admin.vue";
import AddAdmin from "@/views/admin/AddAdmin.vue";
import EditAdmin from "@/views/admin/EditAdmin.vue";

import Inventory from "@/views/inventory/Inventory.vue";
import AddBarang from "@/views/inventory/AddBarang.vue";
import EditBarang from "@/views/inventory/EditBarang.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/transaksi",
    name: "transaksi",
    component: Transaksi
  },
  {
    path: "/inventory",
    name: "inventory",
    component: Inventory
  },
  {
    path: "/member",
    name: "member",
    component: Member
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  },
  {
    path: "/laporan",
    name: "laporan",
    component: Laporan
  },
  {
    path: "/add-member",
    name: "addMember",
    component: AddMembers
  },
  {
    path: "/edit-member",
    name: "editMember",
    component: EditMember
  },
  {
    path: "/add-admin",
    name: "addAdmin",
    component: AddAdmin
  },
  {
    path: "/edit-admin",
    name: "editAdmin",
    component: EditAdmin
  },
  {
    path: "/add-barang",
    name: "addBarang",
    component: AddBarang
  },
  {
    path: "/edit-barang",
    name: "editBarang",
    component: EditBarang
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
