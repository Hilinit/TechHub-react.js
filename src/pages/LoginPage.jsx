import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useLoginForm } from '../hooks/useLoginForm'
export default function LoginPage() {
  const form = useLoginForm()
  return (
    <div className="min-h-screen bg-[#080b11] flex items-center justify-center p-4">
      <div className="bg-[#0e1422] border border-emerald-500/30 rounded-2xl p-8 w-full max-w-md shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/logo.png" className="w-9 h-9 lg:w-14 lg:h-14" alt="Logo"/>
          <span className="text-2xl font-bold text-white"><span className="text-emerald-400">Tech</span>Hub</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-6 text-center">{form.isRegister ? 'Hesab Yaradın' : 'Giriş Edin'}</h2>
        {form.formError && (
          <p className="text-red-400 text-xs mb-4 text-center bg-red-950/50 p-2 rounded border border-red-500/30">
            {form.formError}
          </p>
        )}
        <form onSubmit={form.handleSubmit} className="space-y-4">
          {form.isRegister && (
            <div>
              <label className="text-xs text-gray-400 block mb-1">Ad və Soyad</label>
              <input type="text" value={form.fullName} onChange={(e) => form.setFullName(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500" placeholder="Roza Zərgərli" />
              {form.fullNameError && <p className="text-red-400 text-[11px] mt-1">{form.fullNameError}</p>}
            </div>
          )}
          <div>
            <label className="text-xs text-gray-400 block mb-1">Email</label>
            <input type="text" value={form.email} onChange={(e) => form.setEmail(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500" placeholder="user@techhub.az"/>
            {form.emailError && <p className="text-red-400 text-[11px] mt-1">{form.emailError}</p>}
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Şifrə</label>
            <div className="relative">
              <input type={form.showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => form.setPassword(e.target.value)} className="w-full bg-[#05070c] border border-gray-700 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white outline-none focus:border-emerald-500" placeholder="*******" />
              <button type="button" onClick={() => form.setShowPassword(!form.showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-colors" >
                {form.showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
            {form.passwordError && <p className="text-red-400 text-[11px] mt-1">{form.passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl transition-all text-sm">
            {form.isRegister ? 'Qeydiyyatdan Keç' : 'Daxil Ol'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button onClick={form.toggleRegister} className="text-xs text-gray-400 hover:text-emerald-400 transition-colors">
            {form.isRegister ? 'Hesabınız var? Giriş edin' : 'Hesabınız yoxdur? Qeydiyyatdan keçin'}
          </button>
        </div>
      </div>
    </div>
  )
}