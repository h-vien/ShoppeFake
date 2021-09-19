import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthenticated } from '../hooks/useAuthenticated'
import { path } from '../constants/path'
export default function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()
  if (authenticated) {
    return <Redirect to={path.home} />
  }
  return <>{children}</>
}
