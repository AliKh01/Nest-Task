import React, { useRef, useState } from 'react';
import { Toaster, toast } from "react-hot-toast";
import TaskInput from './taskinput';
import TaskList from './tasklist';
import Statistics from './statistics';
function Tasks() {
    let today = new Date()
    const inputtitleRef = useRef(null);
    const inputDescRef = useRef(null);
    const inputDateRef = useRef(null);
    const selectCategoryRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const categories = ["None 🚫", "Shopping 🛒", "Work 💻", "Personal 😁", "Goals 🏅", "Projects 🧾", "Fitness 💪🏽", "Study 📚"];
    const handleAddTask = () => {
        const titletext = inputtitleRef.current?.value.trim();
        const taskText = inputDescRef.current?.value.trim();
        const taskDate = inputDateRef.current?.value;
        const piority = "default";
        const taskCategory = selectCategoryRef.current.value;
        if (titletext) {
            if (taskText) {
                const newTask = {
                    id: Date.now(),
                    title: titletext,
                    description: taskText,
                    date: taskDate,
                    completed: false,
                    piority: piority,
                    category: taskCategory,
                };
                setTasks((prev) => [...prev, newTask]);
                inputtitleRef.current.value = '';
                inputDescRef.current.value = '';
                inputDateRef.current.value = "";
                selectCategoryRef.current.value = "None 🚫";
                toast.success("Your Task Added Successfully", {
                    duration: 2000,
                    position: "top-center",
                })
            } else {
                toast.error("You Must Write A Description", {
                    duration: 2000,
                    position: "top-center",
                });
            }
        } else {
            toast.error("You Must Write A Title", {
                duration: 2000,
                position: "top-center",
            })
        }

    };

    const handleToggleComplete = (taskId) => {
        const taskInNormal = tasks.find(task => task.id === taskId);
        const taskInCompleted = completedTasks.find(task => task.id === taskId);
        if (taskInNormal) {
            const updatedTask = { ...taskInNormal, completed: true };
            setTasks(tasks.filter(task => task.id !== taskId));
            setCompletedTasks([...completedTasks, updatedTask]);
            toast.success("Your Task Is Completed", {
                duration: 3000,
                position: "top-center",
            })
        } else if (taskInCompleted) {
            const updatedTask = { ...taskInCompleted, completed: false };
            setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
            setTasks([...tasks, updatedTask]);
            toast.error("Your Task Is Uncompleted", {
                duration: 2000,
                position: "top-center",
            })
        }

    };

    const handleDeleteTask = (taskId) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
        setCompletedTasks((prev) => prev.filter((task) => task.id !== taskId));
        toast.success("Your Task Is Deleted", {
            duration: 2000,
            position: "top-center",
        })
    };

    const handlePiority = (e, taskId) => {
        const taskInNormal = tasks.find(task => task.id === taskId);
        const taskInCompleted = completedTasks.find(task => task.id === taskId);
        if (taskInNormal) {
            tasks.map(() => {
                return setTasks(prev => prev.map(task => task.id === taskId ? { ...task, piority: e.target.value } : task))
            })
        } else if (taskInCompleted) {
            completedTasks.map(() => {
                return setCompletedTasks(prev => prev.map(task => task.id === taskId ? { ...task, piority: e.target.value } : task))
            })
        }
    };

    const handelDeleteAllTasks = (e) => {
        setTasks([]);
    };

    const handelDeleteAllCompletedTasks = (e) => {
        setCompletedTasks([]);
    };

    const handelCompleteAllTasks = () => {
        setCompletedTasks((prev) => [...prev, ...tasks.map(task => ({ ...task, completed: true }))]);
        setTasks([])
    };

    const handelCompleteAllCompletedTasks = () => {
        setTasks((prev) => [...prev, ...completedTasks.map(task => ({ ...task, completed: false }))]);
        setCompletedTasks([])
    };

    return (
        <div>
            <Toaster />
            <div className="today">{today.toLocaleDateString("en-GB")}</div>
            <Statistics
                tasks={tasks}
                completedTasks={completedTasks}
                categories={categories}
            />
            <div>
                <TaskInput
                    inputtitleRef={inputtitleRef}
                    inputDescRef={inputDescRef}
                    inputDateRef={inputDateRef}
                    handleAddTask={handleAddTask}
                    selectCategoryRef={selectCategoryRef}
                    categories={categories}
                />
                <TaskList
                    title="Tasks"
                    tasks={tasks}
                    setTasks={setTasks}
                    handelDeleteAll={handelDeleteAllTasks}
                    handelCompleteAll={handelCompleteAllTasks}
                    handlePiority={handlePiority}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteTask={handleDeleteTask}
                    completion="Complete All"
                    categories={categories}
                />
                <TaskList
                    title="Copmleted Tasks"
                    tasks={completedTasks}
                    setTasks={setCompletedTasks}
                    handelDeleteAll={handelDeleteAllCompletedTasks}
                    handelCompleteAll={handelCompleteAllCompletedTasks}
                    handlePiority={handlePiority}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteTask={handleDeleteTask}
                    completion="Uncomplete All"
                    categories={categories}
                />
            </div>
        </div>
    );
}

export default Tasks;