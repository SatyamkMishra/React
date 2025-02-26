import React, { useState } from "react";
import New from "./New";

const ToDo = () => {
    let [list, setList] = useState([]);

    function action(event) {
        event.preventDefault();
        let todo = event.target.todo.value.trim();

        if (todo === "") return; 

        if (!list.includes(todo)) {
            setList([...list, todo]);
            event.target.todo.value = "";
        } else {
            alert("Already exists in todo list");
        }
    }

    let todoList = list.map((value, idx) => (
        <React.Fragment key={idx}>
            <New value={value} idx={idx} list={list} setList={setList} />
            <br />
        </React.Fragment>
    ));

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    To-Do List
                </h1>

                <div className="flex mb-4">
                    <form onSubmit={action} className="w-full flex">
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Add a new task"
                            name="todo"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </form>
                </div>

                <div>{todoList}</div>
            </div>
        </div>
    );
};

export default ToDo;
