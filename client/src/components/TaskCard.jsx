function TaskCard() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition">

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-xl font-semibold">
          Build MERN Project
        </h3>

        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">

          High

        </span>

      </div>

      <p className="text-slate-400 mb-6">

        Complete frontend dashboard and backend APIs.

      </p>

      <div className="flex justify-between items-center">

        <span className="text-sm text-slate-500">
          Due: Tomorrow
        </span>

        <button className="text-cyan-400 hover:text-cyan-300">

          View

        </button>

      </div>

    </div>

  );
}

export default TaskCard;