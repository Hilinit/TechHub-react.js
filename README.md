# 🛒 TechHub Store

Futuristik, kiberpank üslubunda hazırlanmış yüksək performanslı və responsiv e-ticarət platforması.

---

## ✨ Xüsusiyyətlər

- 🎨 **Kiberpank UI:** Tünd mövzu (`Dark Mode`) və neon yaşıl (`emerald-400`) vurğularla müasir dizayn.
- 🔐 **Autentifikasiya Məhdudiyyəti:** Səbətdən istifadə üçün giriş və qeydiyyat tələbi (`AuthContext`).
- 🛒 **Səbət İdarəetməsi:** Məhsul əlavə etmə, sayını dəyişmə, silmə və yaddaşda saxlama (`CartContext` & `LocalStorage`).
- 🔍 **Dinamik Filter:** Məhsulları kateqoriyalara görə ani qruplaşdırma.
- 🚫 **Xüsusi NotFound:** Məhsul tapılmadıqda filteri sıfırlama bildirişi.
- ⚡ **Smooth Scrolling:** Səhifə içi naviqasiyalarda rəvan və səlis sürüşmə effekti.
- 📱 **100% Responsiv:** Mobil, planşet və masaüstü ekranlara tam uyğunluq.

---

## 🛠️ Texnologiyalar

| Sahə | Texnologiya |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite / CRA) |
| **Routing** | React Router DOM v6 |
| **Styling** | Tailwind CSS, React Icons |
| **State Management** | Context API (`AuthContext`, `CartContext`) & `useReducer` |
| **Storage** | Browser LocalStorage |

---

## 📂 Qovluq Strukturu

```text
src/
├── assets/         # Şəkillər və statik fayllar
├── components/     # Təkrar istifadə olunan komponentlər
│   ├── common/     # Navbar, Footer
│   ├── sections/   # ProductList, NotFound
│   └── guards/     # ErrorBoundary, ProtectedRoute
├── contexts/       # AuthContext, CartContext
├── data/           # Data.jsx (Məhsul siyahısı)
├── hooks/          # Xüsusi Hook-lar (useCart, useAuth və s.)
├── pages/          # Home, Login, Register
├── App.jsx         # Əsas marşrutlar (Routes)
└── main.jsx        # Giriş nöqtəsi (Entry point)


# 1. Repozitoriyanı klonlayın
git clone https://github.com/Hilinit/TechHub-react.js.git

-store

# 2. Lazımi paketləri yükləyin
npm install

# 3. Layihəni lokal serverdə başladın
npm run dev

Proyektin canlı versiyasına baxmaq üçün: https://techhub-store-ten.vercel.app