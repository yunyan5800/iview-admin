import axios from '@/libs/api.request'
import { JSEncrypt } from 'jsencrypt'

export const getTokenTicket = () => {
  const crypt = new JSEncrypt({ default_key_size: 512 }).getKey()
  const publicKey = crypt.getPublicBaseKeyB64()
  const privateKey = crypt.getPrivateBaseKeyB64()
  sessionStorage.setItem('cusprk', privateKey)
  return axios.getToken({
    url: 'token',
    data: publicKey,
    method: 'post'
  }).then(res => {
    console.log(res.headers)
    sessionStorage.setItem('token', res.headers.token)
    sessionStorage.setItem('ticket', res.headers.ticket)
  })
}

export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password: password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
