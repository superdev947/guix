import axios from "axios"
import { DEV } from "../../constants"

let authTokens = ''
export async function setToken (token) {
  authTokens = await token
  console.log('==============setToken==============')
  return await true
}

export const Request = async (type, url, params) => {
  return new Promise((resolve, reject) => {
    _Request(type, url, params)
      .then((response)=>{
        resolve(response.data)
      })
      .catch((error)=>{
        reject(error)
      })
  })
}

export const _Request = async (type, url, params={}) => {
  const _axios = axios.create({
    baseURL: DEV.BACKEND_URL,
    headers: {
      "Content-Type" : "application/json",
      "authToken" : authTokens
    },
  })
  return _axios[type](url, params)
}

export const validateEmail = async(email) => {
  const re = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}