import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACK_END_API_TASKS_URL } from "../config";

interface Task {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [task, setTask] = useState<Task | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;

      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BACK_END_API_TASKS_URL}${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Erro ao buscar tarefa");

        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error("Erro ao buscar tarefa:", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleSave = async () => {
    if (!task || !id) return;

    try {
      setIsSaving(true);
      const token = localStorage.getItem("token");
      const response = await fetch(`${BACK_END_API_TASKS_URL}${id}`, {
        method: "PUT", // ou PATCH se quiser atualizar parcialmente
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: task.title,
          description: task.description,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar tarefa");

      alert("Tarefa atualizada com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar");
    } finally {
      setIsSaving(false);
    }
  };

  if (!task) {
    return (
      <div className="w-screen h-screen bg-slate-500 flex items-center justify-center text-white">
        Carregando...
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#1E1A1A] p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative m-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            EDITAR TAREFA
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md space-y-4">
          <input
            type="text"
            value={task.title}
            onChange={(e) =>
              setTask((prev) => prev && { ...prev, title: e.target.value })
            }
            className="w-full p-2 border border-slate-300 rounded-md"
          />
          <textarea
            value={task.description}
            onChange={(e) =>
              setTask((prev) => prev && { ...prev, description: e.target.value })
            }
            className="w-full p-2 border border-slate-300 rounded-md"
            rows={4}
          />
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
