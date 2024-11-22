"use client";
import React, { useState } from "react";

interface Task {
  title: string;
  desc: string;
}

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [mainTask, setMainTask] = useState<Task[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || desc.trim() === "") {
      alert("Both Title and Description are required.");
      return;
    }
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index: number) => {
    setMainTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Rafay's Todo List
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col items-center">
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {mainTask.length > 0 ? (
            mainTask.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center justify-between mb-5 w-2/3">
                  <h5 className="text-2xl font-semibold">{task.title}</h5>
                  <h6 className="text-lg font-medium">{task.desc}</h6>
                </div>
                <button
                  onClick={() => deleteHandler(index)}
                  className="bg-red-400 text-white px-4 py-2 rounded font-bold"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <h2>No Task Available</h2>
          )}
        </ul>
      </div>
    </>
  );
};

export default Page;
