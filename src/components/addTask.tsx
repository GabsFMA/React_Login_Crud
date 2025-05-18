import { useState } from "react";

interface AddTaskProps {
  onClickSubmitButton: (title: string, description: string) => void;
}

function AddTask({ onClickSubmitButton }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-[#3A2F2F] p-4 rounded-2xl shadow-md space-y-4">
      <input
        className="bg-[#1E1A1A] text-white placeholder-slate-400 px-4 py-2 rounded-md border border-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="bg-[#1E1A1A] text-white placeholder-slate-400 px-4 py-2 rounded-md border border-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md w-full transition-colors"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os espaços em branco!");
          }
          onClickSubmitButton(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
