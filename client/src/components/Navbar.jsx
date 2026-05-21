function Navbar() {

  return (

    <div className="flex justify-between items-center mb-10">

      <div>

        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-slate-400 mt-1">
          Manage your daily tasks
        </p>

      </div>

      <button className="bg-cyan-400 text-slate-950 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">

        + Add Task

      </button>

    </div>

  );
}

export default Navbar;