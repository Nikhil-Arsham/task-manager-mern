import {
  FaTasks,
  FaChartBar,
  FaUser
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        TaskFlow
      </h1>

      <div className="space-y-6">

        <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 cursor-pointer transition">

          <FaTasks />

          <span>Tasks</span>

        </div>

        <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 cursor-pointer transition">

          <FaChartBar />

          <span>Analytics</span>

        </div>

        <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 cursor-pointer transition">

          <FaUser />

          <span>Profile</span>

        </div>

      </div>

    </div>

  );
}

export default Sidebar;