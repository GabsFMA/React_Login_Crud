import { useState } from "react";

interface AddTaskProps {
  onClickSubmitButton: (title: string, description: string) => void;
}

function AddTask({ onClickSubmitButton }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-6 bg-slate-200 rounded-md shadow space-y-4">
      <input
        className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400 w-full"
        type="text"
        placeholder="Insira o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400 w-full"
        type="text"
        placeholder="Insira a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
