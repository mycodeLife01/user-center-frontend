/* eslint-disable @typescript-eslint/no-explicit-any */
import myAxios from '@/request'

export const userRegister = async (params: any) => {
  return await myAxios.request({
    url: '/api/user/register',
    method: 'post',
    data: params,
  })
}
export const userLogin = async (params: any) => {
  return await myAxios.request({
    url: '/api/user/login',
    method: 'post',
    data: params,
  })
}
export const userSearch = async (username: any) => {
  return await myAxios.request({
    url: '/api/user/search',
    method: 'get',
    params: {
      username,
    }
  });
}
export const userDelete = async (id: number) => {
  return await myAxios.request({
    url: '/api/user/delete',
    method: 'post',
    data: id,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export const userLogout = async (params: any) => {
  return await myAxios.request({
    url: '/api/user/logout',
    method: 'post',
    data: params,
  })
}
export const userUpdate = async (params: any) => {
  return await myAxios.request({
    url: '/api/user/update',
    method: 'post',
    data: params,
  })
}
export const userCurrent = async () => {
  return await myAxios.request({
    url: '/api/user/current',
    method: 'get',
  })
}
