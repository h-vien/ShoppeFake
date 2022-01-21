import axios from 'axios'
import LocalStorage from '../constants/localStorage'
import { toast } from 'react-toastify'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API,
      name: ' Shopee app',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //Interceptor la trung gian, dung de config request trc khi gui len server hoc config respone khi dc xu ly boi then va catch
    this.instance.interceptors.response.use(
      response => {
        const result = { ...response.data, status: response.status }
        return result
      },
      ({ response }) => {
        if (response.status === 401) {
          toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 3000
          })
        }
        const result = { ...response.data, status: response.status }
        return Promise.reject(result)
      }
    )
    this.instance.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken)
        if (accessToken) {
          config.headers.authorization = accessToken
        }
        return config
      },
      error => {
        return Promise.reject(error.response)
      }
    )
  }
  get(url, config = null) {
    return this.instance.get(url, config)
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config)
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config)
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config
    })
  }
}

const http = new Http()

export default http
