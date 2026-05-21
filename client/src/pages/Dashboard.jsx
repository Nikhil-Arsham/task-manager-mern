import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Dashboard() {

  return (

    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <TaskCard />
          <TaskCard />
          <TaskCard />

        </div>

      </div>

    </div>

  );
}

export default Dashboard;