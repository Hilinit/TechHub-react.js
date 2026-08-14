import  { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, register } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@gmail')) {
      setError('Düzgün email daxil edin!')
      return
    }
    if (password.length < 6) {
      setError('Şifrə minimum 6 simvol olmalıdır!')
      return
    }

    if (isRegister) {
      if (!fullName.trim()) {
        setError('Ad və Soyadı daxil edin!')
        return
      }
      register(fullName, email)
    } else {
      login(email)
    }
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#080b11] flex items-center justify-center p-4">
      <div className="bg-[#0e1422] border border-emerald-500/30 rounded-2xl p-8 w-full max-w-md shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <div className="flex items-center justify-center gap-2 mb-6">
            <img src="../../../public/logo.png" className="w-9 h-9 lg:w-14 lg:h-14"/>
          <span className="text-2xl font-bold text-white"><span className="text-emerald-400">Tech</span>Hub</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-6 text-center">{isRegister ? 'Hesab Yaradın' : 'Giriş Edin'}</h2>
        {error && <p className="text-red-400 text-xs mb-4 text-center bg-red-950/50 p-2 rounded border border-red-500/30">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="text-xs text-gray-400 block mb-1">Ad və Soyad</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500" placeholder="Əli Əliyev" />
            </div>
          )}
          <div>
            <label className="text-xs text-gray-400 block mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500"placeholder="user@techhub.az"/>
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Şifrə</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500"placeholder="******" />
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl transition-all text-sm">
            {isRegister ? 'Qeydiyyatdan Keç' : 'Daxil Ol'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button onClick={() => { setIsRegister(!isRegister), setError('') }}className="text-xs text-gray-400 hover:text-emerald-400 transition-colors">
            {isRegister ? 'Hesabınız var? Giriş edin' : 'Hesabınız yoxdur? Qeydiyyatdan keçin'}
          </button>
        </div>
      </div>
    </div>
  )
}