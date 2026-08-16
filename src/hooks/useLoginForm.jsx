// src/hooks/useLoginForm.js
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export function useLoginForm() {
  const [isRegister, setIsRegister] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formError, setFormError] = useState('')

  const { login, register } = useContext(AuthContext)
  const navigate = useNavigate()

  const resetErrors = () => {
    setFullNameError('')
    setEmailError('')
    setPasswordError('')
    setFormError('')
  }

  const toggleRegister = () => {
    setIsRegister(!isRegister)
    resetErrors()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    resetErrors()

    let isValid = true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (isRegister && !fullName.trim()) {
      setFullNameError('Ad və Soyadı daxil edin!')
      isValid = false
    }
    if (!email) {
      setEmailError('Email daxil edilməlidir!')
      isValid = false
    } else if (!emailRegex.test(email)) {
      setEmailError('Düzgün email formatı daxil edin!')
      isValid = false
    }
    if (!password) {
      setPasswordError('Şifrə daxil edilməlidir!')
      isValid = false
    } else if (password.length < 6) {
      setPasswordError('Şifrə minimum 6 simvol olmalıdır!')
      isValid = false
    }
    if (!isValid) return
    if (isRegister) {
      register(fullName, email)
      navigate('/', { replace: true })
    } else {
      const success = login(email, password)
      if (success) {
        navigate('/', { replace: true })
      } else {
        setFormError('Email və ya şifrə yanlışdır!')
      }
    }
  }
  return { isRegister, fullName, setFullName, email, setEmail, password, setPassword, showPassword, setShowPassword, fullNameError, emailError, passwordError, formError, toggleRegister, handleSubmit }
}