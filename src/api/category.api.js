import http from '../utils/http'
const URL = 'categories'
const categoryApi = {
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi
