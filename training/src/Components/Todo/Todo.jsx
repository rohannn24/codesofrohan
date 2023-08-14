import React, { useState } from "react";
import './Todo.css';

const Todo = () => {
    const [events, addEvents] = useState("");
    const [items, addItem] = useState([]);
    const addingEvent = (ev) => {
        addEvents(ev.target.value);
    }
    const eventAdded = () =>{
        addItem ( (preItems) => {
            return [...preItems, events];
        } );
        addEvents("");
    }
    return(
        <>
            <div className="full-todo">
                <div className="todo-list">
                    <h1 className="todo-head">To Do List</h1>
                    <div className="adding-todo">
                        <input value = {events} type="text" placeholder="Add Events" onChange={addingEvent}/>
                        <div className="todo-btn" onClick={eventAdded}>+</div>
                    </div>
                    <div className="todo-events">
                        <h1 className="todo-head">Events</h1>
                    </div>
                    <ol>
                        {
                            items.map((i) => {
                                return(
                                    <>
                                    <div className="oneItem">
                                        <div className="todo-btn iBtn"> + </div>
                                        <li>{i}</li>
                                    </div>
                                    </>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Todo;