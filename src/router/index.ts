import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import UserLoginPage from "@/views/user/UserLoginPage.vue";
import UserRegisterPage from "@/views/user/UserRegisterPage.vue";
import UserManagePage from "@/views/admin/UserManagePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: 'userRegister',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: 'adminUserManage',
      component: UserManagePage,
    },
  ],
})

export default router
