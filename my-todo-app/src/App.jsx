// import { useState } from "react";

// export default function App() {
//   const dummyTodos = [
//     { id: 1, text: "Learn React basics", completed: false },
//     { id: 2, text: "Build Todo App", completed: false },
//     { id: 3, text: "Practice JavaScript", completed: true },
//     { id: 4, text: "Go for a walk", completed: false },
//     { id: 5, text: "Watch a tech video", completed: true },
//   ];

//   const [todos, setTodos] = useState(dummyTodos);
//   const [task, setTask] = useState("");

//   function handleAddTask(task) {
//     if (!task) return;
//     const newTask = {
//       id: Date.now(),
//       text: task,
//       completed: false,
//     };
//     setTodos([...todos, newTask]);
//     setTask("");
//   }

//   function handleDeleteTask(id) {
//     setTodos(todos.filter((task) => task.id !== id));
//   }

//   function handleToggle(id) {
//     setTodos(
//       todos.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task,
//       ),
//     );
//   }

//   return (
//     /* Container */
//     <div className="flex h-screen w-screen items-center justify-center bg-amber-200">
//       {/* Container */}
//       <div className="bg-amber-300">
//         <h1 className="bg-amber-500 py-3 text-center font-bold text-amber-900">
//           TODO List
//         </h1>
//         {/* Input section */}
//         <div className="flex gap-1">
//           <input
//             type="text"
//             value={task}
//             placeholder="List a task"
//             className="w-full border border-amber-800 px-4 py-2"
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button
//             className="rounded-full bg-amber-900 px-6 py-3 text-white"
//             onClick={() => handleAddTask(task)}
//           >
//             Add
//           </button>
//         </div>
//         {/* List section */}
//         <div>
//           <ul className="px-10 py-6">
//             {todos.map((todo) => (
//               <li key={todo.id} className="flex py-2">
//                 <div>
//                   {todo.id}. {todo.text} -
//                   <button
//                     onClick={(id) => handleToggle(id)}
//                     className="bg-amber-700 px-2 py-1 text-white"
//                   >
//                     {todo.completed === true ? "Done" : "Pending"}
//                   </button>
//                 </div>
//                 <button
//                   className="ml-2 text-xl text-red-500"
//                   onClick={() => handleDeleteTask(todo.id)}
//                 >
//                   X
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function App() {
  const dummyTodos = [
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Practice JavaScript", completed: true },
  ];

  const [todos, setTodos] = useState(dummyTodos);
  const [task, setTask] = useState("");

  // ➕ Add Task
  function handleAddTask() {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setTask("");
  }

  // ❌ Delete Task
  function handleDeleteTask(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // ✔️ Toggle Task
  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-amber-200">
      <div className="w-96 rounded-lg bg-amber-300 shadow-lg">
        <h1 className="bg-amber-500 py-3 text-center font-bold text-amber-900">
          TODO List
        </h1>

        {/* Input */}
        <div className="flex gap-2 p-3">
          <input
            type="text"
            value={task}
            placeholder="Enter a task..."
            className="w-full rounded border border-amber-800 px-3 py-2"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />
          <button
            className="rounded bg-amber-900 px-4 py-2 text-white"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="space-y-2 p-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded bg-white p-2"
            >
              <span
                onClick={() => handleToggle(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "text-gray-500 line-through" : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                className="text-red-500"
                onClick={() => handleDeleteTask(todo.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
