const Statistics = ({ tasks, completedTasks, categories }) => {
    let allTasks = [...tasks,...completedTasks];
    const countTasksByCategory = () => {
        const counters = [];

        categories.forEach(category => {
            counters[category] = 0;
        });

        allTasks.forEach(task => {
            if (counters.hasOwnProperty(task.category)) {
                counters[task.category]++;
            }
        });

        return counters;
    };

    const categoriesCounters = countTasksByCategory();

    return (
        <div className="absolute right-1 mt-16  border-2 border-rose-600 dark:bg-black dark:text-white">
            <h2 className="uppercase text-center mb-2 text-rose-600 [text-shadow:1px_1px_black] ">Statistics</h2>
            <ul className="divide-y divide-gray-300">
                <li className="py-1 px-4 mb-1">Tasks 🧾: {tasks.length + completedTasks.length}</li>
                <li className="py-1 px-4 mb-1">onProgress Tasks 🔜: {tasks.length}</li>
                <li className="py-1 px-4 mb-1">Completed Tasks ✅: {completedTasks.length}</li>
                {
                    categories.map((category) =>
                        categoriesCounters[category]> 0 ? <li className="py-1 px-4 mb-1" key={category}>{category} : {categoriesCounters[category]}</li> : ""
                    )
                }
            </ul>
        </div>
    );
}

export default Statistics;