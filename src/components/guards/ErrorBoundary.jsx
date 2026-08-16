import  { Component } from 'react'
class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true }}
  componentDidCatch(error, info) { console.error("Xəta baş verdi:", error, info)}
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080b11] text-white flex flex-col items-center justify-center p-4 text-center">
          <div className="bg-[#0e1422] border border-red-500/30 rounded-2xl p-8 max-w-md w-full shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <span className="text-4xl mb-4 block">⚠️</span>
            <h2 className="text-xl font-bold text-red-400 mb-2">Xəta baş verdi!</h2>
            <p className="text-xs text-gray-400 mb-6">Tətbiqdə gözlənilməz bir xəta yarandı. Zəhmət olmasa səhifəni yeniləyin.</p>
            <button onClick={() => window.location.reload()}className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-2.5 rounded-xl text-xs transition-all">
              Səhifəni Yenilə
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary