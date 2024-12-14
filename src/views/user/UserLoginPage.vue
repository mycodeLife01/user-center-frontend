<template>
  <div id="userLoginPage">
    <h2 class="title">请登录以继续使用</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      :model="formState"
      name="basic"
      label-align="left"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="handleSubmit"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号!' },
        { min: 4, message: '账号长度不能小于4位' },]"
      >
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号"/>
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[{ required: true, message: '请输入密码!' },
        { min: 8, message: '密码长度不能小于8位' }]"
      >
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码"/>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>

</template>
<script lang="ts" setup>
import {reactive} from 'vue';
import {userLogin} from "@/api/user.ts";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";

interface FormState {
  userAccount: string;
  userPassword: string;
}

const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
});
const loginUserStore = useLoginUserStore();
const router = useRouter();
const handleSubmit = async (values: any) => {
  const res = await userLogin(values);
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success('用户登录成功')
    router.push({
      path: '/',
      replace: true,
    });
  } else {
    message.error('登录失败');
  }
}
</script>
<style scoped>
#userLoginPage .title {
  text-align: center;
  margin-bottom: 20px;
}
</style>

