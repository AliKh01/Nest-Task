import { useEffect, useRef, useState } from "react";
import TaskItem from "./taskitem";
const TaskList = ({ title, tasks, setTasks, handelDeleteAll, handelCompleteAll, handlePiority, handleToggleComplete,
    handleDeleteTask, completion, categories }) => {
    const sortRef = useRef(null);
    const [sortType, setSortType] = useState("default");
    const sortTasks = (list, type) => {
        const sortedTasks = [...list];
        const order = { P1: 1, P2: 2, P3: 3, default: 4 };

        switch (type) {
            case "A -> Z":
                sortedTasks.sort((a, b) =>
                    a.title?.localeCompare(b.title || "", "ar")
                );
                break;

            case "Z -> A":
                sortedTasks.sort((a, b) =>
                    b.title?.localeCompare(a.title || "", "ar")
                );
                break;

            case "date":
                sortedTasks.sort((a, b) => {
                    if (!a.date) return 1;
                    if (!b.date) return -1;
                    return new Date(a.date) - new Date(b.date);
                });
                break;

            case "priority":
                sortedTasks.sort((a, b) => {
                    const aVal = order[a.piority] || 999;
                    const bVal = order[b.piority] || 999;
                    return aVal - bVal;
                });
                break;

            default:
                return;
        }
        return sortedTasks;
    }
    useEffect(() => {
        if (sortType !== "default") {
            setTasks((prev) => sortTasks(prev, sortType))
        }
    }, [tasks.length, tasks, sortType, setTasks]);
    return (
        <div className="flex justify-center items-center flex-col mb-6 relative">
            <div className=" flex items-center justify-between [width:600px] mb-4 pb-1 border-b-2 [border-bottom-color:#f44336]">
                <div className="flex items-center flex-nowrap">
                    <h1 className="text-sky-300 mr-3">{title}</h1>
                    <span className="text-gray-400 text-xl">({tasks.length})</span>
                </div>
                <div className="flex items-center flex-nowrap ">
                    <div className="relative">
                        <span className="cursor-pointer text-primary mr-2" onClick={() => {
                            sortRef.current.style.display === "inline" ? sortRef.current.style.display = "none"
                                : sortRef.current.style.display = "inline";
                        }}>⬆⬇</span>
                        <select className="w-28 border-2 border-gray-400 rounded-lg absolute -top-5 -left-24 font-bold outline-0 text-center hidden" ref={sortRef} onChange={(e) => setSortType(e.target.value)} >
                            <option value="default">Default</option>
                            <option value="A -> Z">A -{">"} Z</option>
                            <option value="Z -> A">Z -{">"} A</option>
                            <option value="date">📆 Nearest</option>
                            <option value="priority">🏳 Importance</option>
                        </select>
                    </div>
                    <span className='text-primary cursor-pointer text-xs mr-2 hover:underline' onClick={handelDeleteAll}>Delete All </span>
                    <span className='text-primary cursor-pointer text-xs mr-2 hover:underline' onClick={handelCompleteAll}>{completion}</span>
                </div>
            </div>

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    setTasks={setTasks}
                    handlePiority={handlePiority}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteTask={handleDeleteTask}
                    categories={categories}
                />
            ))}
        </div>
    );
}

export default TaskList;