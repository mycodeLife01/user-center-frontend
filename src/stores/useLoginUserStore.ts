/* eslint-disable @typescript-eslint/no-explicit-any */
import { userCurrent } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    username: '未登录',
  })
  async function fetchLoginUser() {
    const res = await userCurrent()
    if (res.data.code == 0 && res.data.data) {
      loginUser.value = res.data.data
    } else {
      setTimeout(() => {
        loginUser.value = {
          username: '陌生人',
          id: '999',
        }
      }, 3000)
    }
  }
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }
  return { loginUser, fetchLoginUser, setLoginUser }
})
