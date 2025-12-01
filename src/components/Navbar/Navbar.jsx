import profile from "../../assets/profile.jpg"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-1 font-semibold text-lg">
          <span className="text-slate-900">Auction</span>
          <span className="text-amber-400">Gallery</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <li className="text-slate-900 cursor-pointer">Home</li>
          <li className="hover:text-slate-900 cursor-pointer">Auctions</li>
          <li className="hover:text-slate-900 cursor-pointer">Categories</li>
          <li className="hover:text-slate-900 cursor-pointer">How to works</li>
        </ul>

        {/* Profile */}
        <div className="flex items-center gap-3">
          {/* FIXED PROFILE IMAGE */}
          <button className="h-12 w-12 rounded-full border border-slate-200 overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </button>

          {/* Notification Icon */}
          <button className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-lg">
            🛎
          </button>
        </div>
      </nav>
    </header>
  )
}
