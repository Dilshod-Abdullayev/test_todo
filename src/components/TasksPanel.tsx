import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from 'framer-motion';
interface RootState {
    todos: {
        todos: Array<{
            id: number;
            text: string;
            completed: boolean;
        }>;
    };
}
import { removeTodo } from "../redux/Todos";
import { useState } from "react";
export default function TasksPanel() {
    const [hid, setHid] = useState(true)
    const [select, setSelect] = useState(true)
    console.log(select);

    const [sortedTodos, setSortedTodos] = useState<Array<{
        id: number;
        text: string;
        completed: boolean;
    }>>([]);
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    const removeTodoItem = (id: number) => {
        dispatch(removeTodo(id))
    }
    const handleOpen = () => {
        setHid(!hid)
    }
    const handleAZ = () => {
        setSelect(false);
        setHid(true);
        const sortedArray = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setSortedTodos(sortedArray);
    }
    const handleZA = () => {
        setSelect(true);
        setHid(true);
        const sortedArray = [...todos].sort((a, b) => b.text.localeCompare(a.text));
        setSortedTodos(sortedArray);
    }
    const renderTodos = sortedTodos.length > 0 ? sortedTodos : todos;
    return (
        <div>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 dark:bg-slate-900 dark:shadow-2xl">
                <div className="flex gap-x-14 flex-row justify-between items-center">
                    <div>
                        <h1 className="text-3xl dark:text-yellow-100  font-medium">Tasks list</h1>
                    </div>
                    <div className="inline-flex gap-x-14 space-x-2 mt-2 items-center">
                        <a href="#" className="p-2 dark:bg-slate-900 dark:text-yellow-100 border  border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium hidden md:block">Urgent</span>
                        </a>
                        <div className="w-320  relative">
                            <a onClick={handleOpen} href="#" className="p-2 border dark:text-yellow-100 dark:bg-slate-800 border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <span className="text-sm dark:text-yellow-100  hidden md:block">Latest</span>
                            </a>
                            <AnimatePresence>
                                {!hid && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-md shadow-md"
                                    >
                                        <motion.li onClick={handleAZ} className="hover:bg-slate-900 hover:text-white p-2 rounded-lg cursor-pointer">
                                            A~Z
                                        </motion.li>
                                        <motion.li onClick={handleZA} className="hover:bg-slate-900 hover:text-white p-2 rounded-lg cursor-pointer">
                                            Z~A
                                        </motion.li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <p className="text-slate-500">Hello, here are your latest tasks</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="tasks" className="my-5">
                    {renderTodos.length > 1 ? renderTodos.map((item) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} key={item.id} id="task" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent  transition ease-linear duration-150">
                            <div className="inline-flex items-center space-x-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6  ${item.completed ? "" : "text-slate-500"}  hover:text-indigo-600  hover:cursor-pointer`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="dark:text-white">{item.text}</div>
                            </div>
                            <div onClick={() => removeTodoItem(item.id)} role="button" aria-label="remove" data-testid={`remove-button-${item.id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>

                        </motion.div>

                    )) : <h1 className="dark:text-yellow-100 ">no task yet</h1>
                    }
                </motion.div>
                <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
            </div>
        </div>
    )
}
