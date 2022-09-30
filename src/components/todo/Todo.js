import React from 'react';
const Todo = (props) => {
    const {picture , name , time} = props.todo;
    const {handleClick} = props;
        
    return (
        <div>
            <div className="card" >
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <b>Time required: {time}m</b> <br /> <br />
                    <button onClick={() => handleClick(props.todo)} type="button" className="btn btn-primary ">Add To List</button>
                </div>
                </div>
            </div>
    );
};

export default Todo;