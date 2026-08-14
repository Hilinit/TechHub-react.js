
import { FaInstagram, FaTwitter, FaYoutube, FaPhone } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { GrLocationPin } from "react-icons/gr"
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#05070c] border-t border-gray-900 text-gray-400 py-12 mt-16 text-xs">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-start justify-between">
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center gap-2">
            <img src="../../../public/logo.png" className="w-9 h-9 lg:w-14 lg:h-14"/>
            <span className="text-xl font-bold text-white">
              <span className="text-emerald-400">Tech</span>Hub
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">The premier destination for serious gamers. Curated hardware for maximum performance and precision.</p>
          <div className="flex items-center gap-4 text-emerald-400 text-[15px] pt-2">
            <a href="#instagram" className="hover:text-emerald-300 transition-colors"><i className="fab fa-twitter"></i> <FaInstagram /></a>
            <a href="#Twitter" className="hover:text-emerald-300 transition-colors text-blue-400"><i className="fab fa-discord"></i><FaTwitter /></a>
            <a href="#youtube" className="hover:text-emerald-300 transition-colors text-red-400"><i className="fab fa-youtube"></i><FaYoutube /></a>
          </div>
        </div>
        <div className="space-y-3 md:justify-self-center">
          <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Categories</a></li>
            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Products</a></li>
          </ul>
        </div>
        <div className="space-y-3 md:justify-self-end">
          <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-400 text-sm"><IoIosMail className="text-[15px]"/></span>
              <a href="mailto:support@novagear.gg" className="hover:text-emerald-400 transition-colors">
                support@novagear.gg
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-red-400 text-sm"><GrLocationPin className="text-[15px]" /></span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-400 text-sm"><FaPhone className="text-[15px]" /></span>
              <span>+1 (888) 668-4327</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}