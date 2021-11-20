import React from 'react'

import 'normalize.css'
import '../src/assets/styles/global.scss'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Authoriztion from './components/Authorization/Authoriztion'
import Loading from './components/Loading/Loading'

function App() {
  return (
    <div className="App">
      <Routes />
      <Loading />
      <ToastContainer />
      <Authoriztion />
    </div>
  )
}

export default App
