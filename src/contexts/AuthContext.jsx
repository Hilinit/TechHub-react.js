import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null)
  useEffect(() => {
    const expiry = localStorage.getItem('token_expiry')
    if (expiry && Date.now() > Number(expiry)) logout() 
  }, [])

  const login = (email, password) => {
    if (email === "user@techhub.az" && password === "123456") {
      const fakeToken = 'techhub-token-xyz777'
      const userData = { email }
      const expiryTime = Date.now() + 60 * 60 * 1000

      localStorage.setItem('token', fakeToken)
      localStorage.setItem('token_expiry', expiryTime)
      localStorage.setItem('user', JSON.stringify(userData))

      setToken(fakeToken)
      setUser(userData)
      return true
    } return false
  }

  const register = (fullName, email) => {
    const fakeToken = 'techhub-token-xyz777'
    const userData = { fullName, email }
    const expiryTime = Date.now() + 60 * 60 * 1000

    localStorage.setItem('token', fakeToken)
    localStorage.setItem('token_expiry', expiryTime)
    localStorage.setItem('user', JSON.stringify(userData))
    
    setToken(fakeToken)
    setUser(userData)
    return true
  }

  const logout = () => { localStorage.removeItem('token'), localStorage.removeItem('token_expiry'), localStorage.removeItem('user'), setToken(null), setUser(null) }

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}