import { createContext, useState } from 'react';

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null)

  const login = (email) => {
    const fakeToken = 'techhub-token-xyz777'
    const userData = { email }
    localStorage.setItem('token', fakeToken)
    localStorage.setItem('user', JSON.stringify(userData))
    setToken(fakeToken)
    setUser(userData)
  };

  const register = (fullName, email) => {
    const fakeToken = 'techhub-token-xyz777';
    const userData = { fullName, email };
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(fakeToken)
    setUser(userData)
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
