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
  },
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data)
  },
  deletePurchase(data) {
    return http.delete(`${URL}`, data)
  },
  buyPurchase(data) {
    return http.post(`${URL}/buy-products`, data)
  }
}
export default purchaseApi
