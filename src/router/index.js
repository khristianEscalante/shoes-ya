import { createRouter, createWebHistory } from "vue-router";
import HomeLayouts from "@/layouts/HomeLayouts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeLayouts,
      children: [
        {
          path: "/",
          name: "inicio",
          component: () => import("@/views/Client/HomeView.vue"),
        },
        {
          path: "/productos",
          name: "productos",
          component: () => import("@/views/Client/MenuView.vue"),
        },
        {
          path: "/contacto",
          name: "contacto",
          component: () => import("@/views/Client/ContactView.vue"),
        },
        {
          path: "/detalle/:id",
          name: "detalle",
          component: () => import("@/views/Client/DetalleView.vue"),
        },
        {
          path: "/carrito",
          name: "carrito",
          component: () => import("@/views/Client/CartView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/layouts/loginAdmin.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/layouts/adminLayout.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "categorias",
          name: "categorias",
          component: () => import("@/views/admin/CategoryView.vue"),
        },
        {
          path: "productos",
          name: "productos-admin",
          component: () => import("@/views/admin/ProductosView.vue"),
        },
        {
          path: "contactos",
          name: "contactos",
          component: () => import("@/views/admin/ContactosView.vue"),
        },
        {
          path: "",
          name: "pedidos",
          component: () => import("@/views/admin/PedidosView.vue"),
        },
        {
          path: "perfil",
          name: "perfil",
          component: () => import("@/views/admin/Perfil/PerfilView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
