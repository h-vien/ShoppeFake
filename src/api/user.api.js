import http from '../utils/http'

const URL = 'user'

const userApi = {
  updateMe(data) {
    return http.put(`${URL}`, data)
  }
}
export default userApi
