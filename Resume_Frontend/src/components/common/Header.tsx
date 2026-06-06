import { useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const {
    isAuthenticated,
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout =
    async () => {
      await logout();
      setMenuOpen(false);
      navigate("/login");
    };

  return (
    <header className="sticky top-0 z-50 bg-[#111827]/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div
              className="
              w-11
              h-11
              rounded-2xl
              flex
              items-center
              justify-center
              font-bold
              text-white
              "
              style={{
                background:
                  "linear-gradient(135deg,#13005A,#1C82AD)",
              }}
            >
              AI
            </div>

            <div>
              <h1 className="font-bold text-white text-lg md:text-xl">
                Resume Analyzer
              </h1>

              <p className="text-slate-400 text-xs hidden sm:block">
                AI Powered ATS Review
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#03C988] font-medium"
                  : "text-slate-300 hover:text-[#03C988] transition"
              }
            >
              Home
            </NavLink>

            {isAuthenticated && (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#03C988] font-medium"
                      : "text-slate-300 hover:text-[#03C988] transition"
                  }
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/resumes/upload"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#03C988] font-medium"
                      : "text-slate-300 hover:text-[#03C988] transition"
                  }
                >
                  Upload Resume
                </NavLink>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-slate-300 hover:text-[#03C988] transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                  bg-[#03C988]
                  text-black
                  font-semibold
                  px-5
                  py-2.5
                  rounded-xl
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 bg-[#0B1120] border border-slate-800 px-4 py-2 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#1C82AD] flex items-center justify-center text-sm font-bold">
                    {user?.name?.charAt(
                      0
                    )}
                  </div>

                  <span className="text-slate-300">
                    {user?.name}
                  </span>
                </div>

                <button
                  onClick={
                    handleLogout
                  }
                  className="
                  bg-red-500
                  px-5
                  py-2.5
                  rounded-xl
                  text-white
                  hover:bg-red-600
                  transition-all
                  "
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            className="md:hidden text-white"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#111827]">
            <div className="py-4 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="text-slate-300 px-2"
              >
                Home
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-slate-300 px-2"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/resumes/upload"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-slate-300 px-2"
                  >
                    Upload Resume
                  </Link>

                  <div className="border-t border-slate-800 pt-4 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#1C82AD] flex items-center justify-center text-sm font-bold">
                        {user?.name?.charAt(
                          0
                        )}
                      </div>

                      <span className="text-[#03C988]">
                        {user?.name}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="
                    bg-red-500
                    text-white
                    rounded-xl
                    py-2
                    mt-2
                    mx-2
                    "
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="text-slate-300 px-2"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                    bg-[#03C988]
                    text-black
                    rounded-xl
                    py-2
                    mx-2
                    text-center
                    font-semibold
                    "
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;