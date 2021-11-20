// const USER = '/user'
// export const path = {
//   home: '/',
//   login: '/login',
//   register: '/register',
//   product: '/product',
//   productDetail: '/product/:idProduct',
//   user: USER,
//   cart: '/cart',
//   profile: USER + '/profile',
//   password: USER + '/password',
//   purchase: USER + '/purchase',

//   notFound: '*'
// }

class Path {
  constructor() {
    this.home = '/'
    this.login = '/login'
    this.register = '/register'
    this.product = '/product'
    this.productDetail = '/productthis./:idProduct'
    this.user = '/user'
    this.cart = '/cart'
    this.profile = this.user + '/profile'
    this.password = this.user + '/password'
    this.purchase = this.user + '/purchase'

    this.notFound = '*'
  }
}
export const path = new Path()
