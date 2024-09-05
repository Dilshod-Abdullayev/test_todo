import React from "react";
import TasksPanel from "./TasksPanel";
import CreatePanel from "./CreatePanel";
import setModal from "../hooks/setModal";
export default function Panel() {
    const { openModal, closeModal } = setModal();
    const [showTasksPanel, setShowTasksPanel] = React.useState(true);
    const handleTasksClick = () => {
        setShowTasksPanel(true);
        openModal();
    };
    const handleAddTaskClick = () => {
        setShowTasksPanel(false);
        closeModal();
    };
    return (
        <div className="flex flex-col">
            <div className="flex gap-4 justify-center w-full p-4 text-slate-900 dark:text-yellow-50 dark:bg-slate-900 dark:shadow-2xl">
                <button onClick={handleTasksClick} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
                    Tasks
                </button>
                <button onClick={handleAddTaskClick} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
                    Add<span className="text-slate-900">Task</span>
                </button>
            </div>
            <div className="flex w-full justify-center">
                {showTasksPanel ? <TasksPanel /> : <CreatePanel />}
            </div>
        </div>
    );
}
