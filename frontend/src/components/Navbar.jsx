import { ShoppingBagIcon, ShoppingCartIcon, StoreIcon } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="navbar max-w-7xl mx-auto min-h-[4rem] px-8 justify-between bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex-1 lg:flex-none">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <StoreIcon className="size-9 text-primary" />

            <span
              className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              QuickStore
            </span>
          </div>
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <p>Theme Selector</p>

        {isHomePage && (
          <div className="indicator">
            <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
              <ShoppingBagIcon className="size-5" />

              <span className="badge badge-sm badge-primary indicator-item">
                10
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
