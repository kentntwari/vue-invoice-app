import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Current from "@/views/Current.vue";
import EditInvoice from "@/views/Edit.vue";
import New from "@/views/New.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Dashboard,
      children: [
        {
          path: "new",
          component: New,
        },
      ],
    },
    {
      path: "/invoice/:id",
      name: "invoice",
      component: Current,
      children: [
        {
          path: "edit",
          name: "Edit invoice",
          component: EditInvoice,
        },
      ],
    },
    ,
  ],
});

export default router;
