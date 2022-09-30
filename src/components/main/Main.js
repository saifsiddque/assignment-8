import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Todo from '../todo/Todo';
import './Main.css';

const Main = () => {
    const [todos, setTodos] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setTodos(data))
    });

    const [cart, setCart] = useState([]);
        const handleClick = (todo) =>{
            const newcart = cart + parseInt(todo.time);
            setCart(newcart) 
            console.log(todo)
    }

    return (
        <div className='main'>
            <div className='todo'>
                {
                    todos.map(todo=> <Todo 
                        key={todo.time}
                        todo={todo}
                        handleClick={handleClick}
                        ></Todo>)
                }

            </div>
            <div className="sidebar">
            <Sidebar time = {cart}></Sidebar>

            </div>
            {/* <Todo></Todo>
            <Sidebar></Sidebar> */}
        </div>
    );
};

export default Main;