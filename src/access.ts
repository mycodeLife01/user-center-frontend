import router from "@/router";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";
import {message} from "ant-design-vue";

router.beforeEach((to, from, next) => {
  const loginUserStore = useLoginUserStore();
  const loginUser = loginUserStore.loginUser;
  const toUrl = to.fullPath;
  if (toUrl.startsWith("/admin")) {
    if (loginUser.userRole !== 1 || !loginUser) {
      message.error("没有权限");
      next(`/user/login?redirect=${toUrl}`);
      return;
    }
  }
  next();
})
