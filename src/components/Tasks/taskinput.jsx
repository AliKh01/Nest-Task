import { useState } from "react";
const TaskInput = ({ inputtitleRef, inputDescRef, inputDateRef, selectCategoryRef, handleAddTask, categories }) => {
    // eslint-disable-next-line no-unused-vars
    const [selectDate, setSelectDate] = useState();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.target.classList.contains("title")) {
                inputDescRef.current.focus();
            } else
                handleAddTask();
        }
    };
    const handelShowPicker = (e) => {
        inputDateRef.current.showPicker();
    }
    const handelSelectDate = () => {
        setSelectDate(inputDateRef.current.value);
    }

    return (
        <div className="flex justify-center items-center mb-6">
            <input
                type="text "
                className="basic-input mr-5 w-56 title"
                placeholder="Your Task's Title..."
                ref={inputtitleRef}
                onKeyDown={handleKeyDown}
            />
            <input
                type="text"
                className='basic-input mr-5 w-56'
                placeholder="Write Your Task..."
                ref={inputDescRef}
                onKeyDown={handleKeyDown}
            />
            <select name="category" className="basic-input mr-5" ref={selectCategoryRef}>
                <option value={categories[0]}>{categories[0]} </option>
                <option value={categories[1]}>{categories[1]} </option>
                <option value={categories[2]}>{categories[2]} </option>
                <option value={categories[3]}>{categories[3]} </option>
                <option value={categories[4]}>{categories[4]} </option>
                <option value={categories[5]}>{categories[5]} </option>
                <option value={categories[6]}>{categories[6]} </option>
                <option value={categories[7]}>{categories[7]} </option>
            </select>
            <div className='relative mr-8'>
                <i className='fas fa-calendar absolute -left-2 top-0 cursor-pointer text-2xl text-gray-400' onClick={handelShowPicker}></i>
                <input
                    type="date"
                    className='w-0 h-0 opacity-0'
                    ref={inputDateRef}
                    onChange={handelSelectDate} />
            </div>

            <button className="w-14 h-9 rounded-lg text-lg bg-gray-400 text-white border-0 cursor-pointer hover:bg-gray-300" onClick={handleAddTask}>
                Add
            </button>
        </div>
    );
}

export default TaskInput;