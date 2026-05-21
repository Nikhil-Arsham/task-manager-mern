import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaTasks,
  FaChartBar,
  FaUser
} from "react-icons/fa";

function App() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: ""
  });

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5001/tasks"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const addTask = async () => {

    try {

      await axios.post(
        "http://localhost:5001/tasks",
        formData
      );

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: ""
      });

    } catch (error) {

      console.log(error);

    }

  };

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5001/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex bg-slate-950 min-h-screen text-white scroll-smooth">

      {/* SIDEBAR */}

      <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6 sticky top-0">

        <h1 className="text-4xl font-extrabold text-cyan-400 mb-12">
          TaskFlow
        </h1>

        <div className="space-y-6">

          {/* TASKS */}

          <a
            href="#top"
            className="flex items-center gap-4 bg-cyan-400/10 text-cyan-400 p-4 rounded-2xl"
          >

            <FaTasks className="text-xl" />

            <span className="font-semibold">
              Tasks
            </span>

          </a>

          {/* ANALYTICS */}

          <a
            href="#analytics"
            className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 p-4 rounded-2xl cursor-pointer transition"
          >

            <FaChartBar className="text-xl" />

            <span className="font-semibold">
              Analytics
            </span>

          </a>

          {/* PROFILE */}

          <a
            href="#profile"
            className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 p-4 rounded-2xl cursor-pointer transition"
          >

            <FaUser className="text-xl" />

            <span className="font-semibold">
              Profile
            </span>

          </a>

        </div>

      </div>

      {/* MAIN */}

      <div
        id="top"
        className="flex-1 p-10"
      >

        {/* HEADER */}

        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-5xl font-bold mb-3">
              Dashboard
            </h2>

            <p className="text-slate-400 text-lg">
              Manage your daily productivity efficiently
            </p>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl mb-10 shadow-xl">

          <h3 className="text-3xl font-bold mb-8">
            Add New Task
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
              className="bg-slate-950 border border-slate-700 p-4 rounded-2xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="dueDate"
              placeholder="Due Date"
              value={formData.dueDate}
              onChange={handleChange}
              className="bg-slate-950 border border-slate-700 p-4 rounded-2xl outline-none focus:border-cyan-400"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="bg-slate-950 border border-slate-700 p-4 rounded-2xl md:col-span-2 outline-none focus:border-cyan-400"
            />

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="bg-slate-950 border border-slate-700 p-4 rounded-2xl outline-none focus:border-cyan-400"
            >

              <option>Low</option>
              <option>Medium</option>
              <option>High</option>

            </select>

          </div>

          <button
            onClick={addTask}
            className="mt-8 bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >

            Add Task

          </button>

        </div>

        {/* ANALYTICS */}

        <div
          id="analytics"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >

          <div className="bg-gradient-to-br from-cyan-500/20 to-slate-900 border border-cyan-400/20 p-8 rounded-3xl shadow-lg">

            <h3 className="text-slate-300 mb-3 text-lg">
              Total Tasks
            </h3>

            <h1 className="text-5xl font-bold text-cyan-400">
              {tasks.length}
            </h1>

          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-slate-900 border border-red-400/20 p-8 rounded-3xl shadow-lg">

            <h3 className="text-slate-300 mb-3 text-lg">
              High Priority
            </h3>

            <h1 className="text-5xl font-bold text-red-400">

              {
                tasks.filter(
                  task => task.priority === "High"
                ).length
              }

            </h1>

          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-slate-900 border border-green-400/20 p-8 rounded-3xl shadow-lg">

            <h3 className="text-slate-300 mb-3 text-lg">
              Completed Today
            </h3>

            <h1 className="text-5xl font-bold text-green-400">
              0
            </h1>

          </div>

        </div>

        {/* TASKS */}

        {
          tasks.length === 0 ? (

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center">

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                No Tasks Yet
              </h2>

              <p className="text-slate-400 text-lg">
                Add your first task to start managing productivity.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {tasks.map((task) => (

                <div
                  key={task._id}
                  className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-xl"
                >

                  <div className="flex justify-between items-start mb-5">

                    <div>

                      <h3 className="text-2xl font-bold mb-2">
                        {task.title}
                      </h3>

                      <p className="text-slate-400 text-sm">
                        {task.description}
                      </p>

                    </div>

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold
                      ${
                        task.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                      }`}
                    >

                      {task.priority}

                    </span>

                  </div>

                  <div className="border-t border-slate-800 pt-4 flex justify-between items-center">

                    <span className="text-slate-500 text-sm">
                      Due: {task.dueDate}
                    </span>

                    <button
                      onClick={() => deleteTask(task._id)}
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-sm font-semibold transition"
                    >

                      Delete

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )
        }

        {/* PROFILE */}

        <div
          id="profile"
          className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl"
        >

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 text-4xl font-extrabold">

              N

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Nikhil Arsham
              </h2>

              <p className="text-cyan-400 mt-2 text-lg">
                MERN Stack Developer
              </p>

              <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">
                Passionate about building modern full stack web applications using React, Node.js, Express and MongoDB.
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="mt-12 text-center text-slate-500 border-t border-slate-800 pt-6">

          <p>
            Built with React, Node.js, Express & MongoDB
          </p>

        </div>

      </div>

    </div>

  );
}

export default App;