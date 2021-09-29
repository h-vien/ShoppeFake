export const path = {
  home: '/',
  login: '/login',
  register: '/register',
  product: '/product',
  productDetail: '/product/:idProduct',
  user: '/user',
  cart: '/cart',
  get profile() {
    return this.user + '/profile'
  },
  get password() {
    return this.user + '/password'
  },
  get purchase() {
    return this.user + '/purchase'
  },

  notFound: '*'
}
