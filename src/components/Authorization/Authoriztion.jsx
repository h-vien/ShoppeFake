import React, { useEffect } from 'react'

import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { path } from '../../constants/path'
import { unauthorize } from '../../pages/Auth/auth.slice'
import { useAuthenticated } from '../../hooks/useAuthenticated'
import { getCartPurchases } from '../../pages/Cart/cart.slice'
export default function Authoriztion() {
  const dispatch = useDispatch()
  const history = useHistory()
  const status = useSelector(state => state.app.status)
  const authenticated = useAuthenticated()
  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize)
      history.push(path.login)
    }
  }, [dispatch, status, history])
  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])
  return <div></div>
}
