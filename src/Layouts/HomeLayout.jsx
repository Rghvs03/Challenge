import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/AuthSlice";

const HomeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    // clear localStorage if you store auth there
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
    navigate("/");
    alert("User Logged Out");
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-[#02010A] via-[#050818] to-black text-slate-100">
      {/* Sidebar */}
      <nav className="flex flex-col items-stretch w-64 px-5 py-6 border-r border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <div className="mb-10">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            E <span className="text-indigo-400">com</span>
          </h1>
          <p className="mt-1 text-xs text-slate-400">Manage users & products</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <NavLink
            to={""}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition 
               text-slate-300 hover:text-white hover:bg-white/10
               ${isActive ? "bg-white/15 text-white shadow-inner" : ""}`
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to={"users"}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition 
               text-slate-300 hover:text-white hover:bg-white/10
               ${isActive ? "bg-white/15 text-white shadow-inner" : ""}`
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Users</span>
          </NavLink>

          <NavLink
            to={"products"}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition 
               text-slate-300 hover:text-white hover:bg-white/10
               ${isActive ? "bg-white/15 text-white shadow-inner" : ""}`
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            <span>Products</span>
          </NavLink>
        </div>

        <div className="mt-auto pt-8 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full py-2.5 rounded-lg bg-red-500/90 hover:bg-red-500 text-sm font-medium text-white shadow-lg shadow-red-500/30 transition"
          >
            Log Out
          </button>
          <p className="mt-3 text-[11px] text-slate-500 text-center">
            Signed in as <span className="text-slate-300">Admin</span>
          </p>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gradient-to-tl from-black via-[#050818] to-[#02010A]">
        <header className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/5 backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-medium text-white">Dashboard</h2>
            <p className="text-xs text-slate-400">
              Overview of your application data
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-[11px] font-semibold">
              AD
            </span>
            <div className="hidden sm:block">
              <p className="font-medium text-slate-100 text-xs">Admin</p>
              <p className="text-[11px] text-slate-400">admin@example.com</p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
