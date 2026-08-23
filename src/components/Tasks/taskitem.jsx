import React, { useState } from "react";
import { toast } from "react-hot-toast";
const TaskItem = ({ task, setTasks, handlePiority, handleToggleComplete, handleDeleteTask,selectCategoryRef,categories }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDesc, setEditDesc] = useState('');
    const [editCategory , setEditCategory] = useState("");
    const handleStartEdit = (task) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
        setEditDesc(task.description);
        setEditCategory(task.category);
    };
    const handleApproveEdit = (taskId) => {
        if (editDesc.trim()) {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === taskId ? { ...task, title: editTitle.trim(), description: editDesc.trim() , category: editCategory } : task
                )
            );
            toast.success("Your Task Edited Successfully", {
                duration: 3000,
                position: "top-center",
            })
            setEditingTaskId(null);
            setEditTitle('');
            setEditDesc('');
            setEditCategory('');
        }
    };

    const handleRejectEdit = () => {
        setEditingTaskId(null);
        setEditTitle('');
        setEditDesc('');
        setEditCategory('');
    };

    const handleEditKeyDown = (e, taskId) => {
        if (e.key === 'Enter') handleApproveEdit(taskId);
        else if (e.key === 'Escape') handleRejectEdit();
    };
    return (
        <div
            key={task.id}
            className={`border-b-2 border-gray-400 mb-2 p-1 pl-2 [width:450px] relative`}
            style={{
                borderBottomColor: task.piority === "P1" ? "#f44336"
                    : task.piority === "P2" ? "#ffeb3b"
                        : task.piority === "P3" ? "#03a9f4" : "#ccc",
            }}
        >
            { editingTaskId === task.id ? (
                <div className="min-h-11 flex justify-center items-center">
                    <input
                        type="text"
                        className="basic-input mr-3 w-28"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onKeyDown={(e) => handleEditKeyDown(e, task.id)}
                        autoFocus
                    />
                    <input
                        type="text"
                        className="basic-input mr-3 w-28"
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        onKeyDown={(e) => handleEditKeyDown(e, task.id)}
                    />
                    <select name="category" className="basic-input mr-2 w-28 text-xs" ref={selectCategoryRef} value={editCategory} onChange={e => setEditCategory(e.target.value)}>
                        <option value={categories[0]}>{categories[0]} </option>
                        <option value={categories[1]}>{categories[1]} </option>
                        <option value={categories[2]}>{categories[2]} </option>
                        <option value={categories[3]}>{categories[3]} </option>
                        <option value={categories[4]}>{categories[4]} </option>
                        <option value={categories[5]}>{categories[5]} </option>
                        <option value={categories[6]}>{categories[6]} </option>
                        <option value={categories[7]}>{categories[7]} </option>
                    </select>
                    <div>
                        <i className='fas fa-calendar  cursor-pointer mr-2 text-2xl text-gray-400' onClick={(e) => e.target.nextSibling.showPicker()}></i>
                        <input
                            type="date"
                            className='w-0 h-0 opacity-0 relative right-4 top-2'
                            value={task.Date}
                            onChange={(e) => {
                                const newDate = e.target.value;
                                setTasks(prev => prev.map(t => t.id === task.id ? { ...task, date: newDate } : t));
                            }} />
                    </div>
                    <div className="flex flex-row">
                        <button
                            className=" bg-white border-0 text-sm  cursor-pointer mr-3 text-green-500 hover:bg-gray-300 dark:bg-black"
                            onClick={() => handleApproveEdit(task.id)}
                        >
                            <i className='fas fa-check'></i>
                        </button>
                        <button
                            className=" bg-white border-0 text-sm  cursor-pointer text-red-500 hover:bg-gray-300 dark:bg-black"
                            onClick={handleRejectEdit}
                        >
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <span className="block min-h-7 break-all max-w-72  text-lg text-zinc-500" style={{
                        textDecoration: task.completed ? "line-through" : "",
                        color: task.completed ? "#aaa" : ""
                    }}>{task.title}</span>
                    <span className="block min-h-7 break-all max-w-72 " style={{
                        textDecoration: task.completed ? "line-through" : "",
                        color: task.completed ? "#ccc" : ""
                    }}>{task.description}</span>
                    <span className="block min-h-7 break-all max-w-72  absolute right-0 text-sm top-2 text-gray-400">{task.date}</span>
                    <span className="block min-h-7 break-all max-w-72  absolute right-0 text-sm top-8 text-yellow-500">({task.category})</span>
                    <div className="flex justify-end gap-3">
                        <select className='font-bold w-24 border-2 border-gray-400 rounded-lg relative outline-0 dark:bg-black dark:text-white' onChange={(e) => handlePiority(e, task.id)} value={task.piority} style={{
                            borderColor: task.piority === "P1" ? "#f44336"
                                : task.piority === "P2" ? "#ffeb3b"
                                    : task.piority === "P3" ? "#03a9f4" : "#ccc",
                            color: task.piority === "P1" ? "#f44336"
                                : task.piority === "P2" ? "#ffeb3b"
                                    : task.piority === "P3" ? "#03a9f4" : ""
                        }}>
                            <option value="default" className='text-black dark:text-white'>Chosse...</option>
                            <option value="P1" className='text-primary'>P1 🏳</option>
                            <option value="P2" className='text-yellow-500'>P2 🏳</option>
                            <option value="P3" className='text-cyan-400'>P3 🏳</option>
                        </select>
                        <button
                            className="bg-white border-0 text-sm cursor-pointer text-blue-700 dark:bg-black"
                            onClick={() => handleStartEdit(task)}
                        >
                            <i className='fa fa-pen '></i>
                        </button>
                        <button
                            className="bg-white border-0 text-sm dark:bg-black"
                        >
                            <label><input
                                type='checkbox'
                                className='hidden peer'
                                name='checkbox'
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)}
                            ></input>
                                <span className='block w-4 h-4 rounded-lg cursor-pointer relative bg-green-200 border-2 border-green-600 peer-checked:bg-green-600 after:peer-checked:content-["✔"] after:peer-checked:absolute after:peer-checked:text-white after:peer-checked:text-sm after:peer-checked:-top-0.5 after:peer-checked:left-0.5' ></span></label>
                        </button>
                        <button
                            className="bg-white border-0 text-sm cursor-pointer text-primary hover:animate-bounce dark:bg-black"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            <i className='fa fa-trash-alt '></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TaskItem;