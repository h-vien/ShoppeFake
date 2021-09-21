import { purchaseStatus } from '../constants/status'
import http from '../utils/http'

const URL = 'purchases'
const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  }
}
export default purchaseApi
