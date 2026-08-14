# 🛒 TechHub Store — Modern E-Commerce Platform

TechHub Store — futuristik, kiberpank üslubunda dizayn edilmiş, yüksək performanslı və responsiv e-ticarət (E-commerce) veb tətbiqidir. İstifadəçilər texnoloji məhsulları kateqoriyalar üzrə filterləyə, səbətə əlavə edə  bilərlər.

---

## 🚀 Xüsusiyyətlər (Features)

- 🎨 **Futuristik & Neomorphic UI:** Neon yaşıl (`emerald-400`) və tünd mövzu (`dark mode`) ilə hazırlanmış müasir görünüş.
- 🔐 **Autentifikasiya Məhdudiyyəti:** Məhsulu səbətə əlavə etmək üçün istifadəçidən giriş/qeydiyyat tələb olunur (AuthContext inteqrasiyası).
- 🔍 **Dinamik Kateqoriya Və Filterləmə:** Məhsulları ani olaraq kateqoriyalarına görə qruplaşdırma.
- 🚫 **Xüsusi Not Found Komponenti:** Axtarış və ya filter nəticəsində məhsul tapılmadıqda istifadəçiyə bildiriş və filteri sıfırlama düyməsi.
- ⚡ **Smooth Scrolling:** Səhifə içi naviqasiyalarda rəvan və səlis sürüşmə effekti.
- 📱 **Tam Responsiv Dizayn:** Mobil, planşet və dəstək verən bütün ekran ölçüləri üçün 100% uyğunluq.

---

## 🛠️ İstifadə Olunan Texnologiyalar (Tech Stack)

* **Frontend:** React.js (Vite / CRA)
* **Routing:** React Router DOM (`v6`)
* **Styling:** Tailwind CSS, React Icons
* **State Management:** React Context API (`AuthContext`)

---

## 📂 Qovluq Strukturu (Project Structure)

```text
src/
├── assets/             # Şəkillər və statik fayllar
├── components/         # Təkrar istifadə olunan komponentlər
│   ├── common/         # Navbar, Footer və s.
│   └── sections/       # ProductList, NotFound və s.
│   └── guards/         # ErrorBoundary və ProtectedRoute
├── contexts/           # AuthContext və digər kontekstlər
├── data/               # Data.jsx (Məhsul siyahısı)
├── pages/              # Səhifələr (Home, Login, Register)
├── App.jsx             # Əsas tətbiq komponenti
└── main.jsx            # Giriş nöqtəsi