import { useState, ChangeEvent } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/Todos';
import { motion } from "framer-motion";
export default function CreatePanel() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text.length > 3) {
            dispatch(addTodo(text));
            setText("");
        } else {
            alert('Please')
        }
    };

    const handleCancel = () => {
        setText("");
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b dark:bg-slate-600 border-teal-500 py-2">
                    <input
                        value={text}
                        onChange={handleInputChange}
                        className="appearance-none bg-transparent border-none w-full dark:text-white text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        data-testid="todo-input"
                        placeholder="Enter todo"
                        aria-label="Todo"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="flex-shrink-0 bg-teal-500 flex items-center  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                        data-testid="add-todo-button"
                    >
                        <IoMdAddCircle />
                        Add
                    </button>   
                    <button
                        onClick={handleCancel}
                        className="flex-shrink-0 flex items-center border-transparent border-4 text-teal-500 dark:hover:text-teal-200  text-sm py-1 px-2 rounded"
                        type="button"
                    >
                        <MdCancel />
                        Cancel
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
