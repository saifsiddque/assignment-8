import React, { useEffect, useState } from 'react';
import img from './saif.jpg'
import './Sidebar.css';


const Sidebar = (props) => {
    const [cart, setCart] = useState([]);
    const handleClick = (todo) =>{
        const newcart = todo;
        setCart(parseInt(newcart)) 
}

    return (
        <div classNameName='sidebar'>
            <h3><img src={img} alt="" />Saif Siddique</h3> <br />
            <h5>Add A Break</h5>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" checked>
                <label
                 className="btn btn-outline-primary" 
                 for="btnradio1" onClick={() => handleClick(1)} >1m</label>

                <label 
                className="btn btn-outline-primary" 
                for="btnradio2"onClick={() => handleClick(2)} >2m</label>
              
                <label 
                className="btn btn-outline-primary" 
                for="btnradio22" onClick={() => handleClick(3)} >3m</label>

                <label 
                className="btn btn-outline-primary" 
                for="btnradio3" onClick={() => handleClick(4)} >4m</label>
                
                
            </div> <br /> <br />
            <h5>Exercise Details </h5>
            <p className='p'>Exercise Time: <div className="right">  {props.time} Minutes</div> </p>
            <p className='p'>Break Time: <div className="right">{cart} Minutes</div></p>
            <div className='text-center'>
              <button type="button" className="btn btn-primary ">Activity Completed</button>
            </div>
            
        </div>
    );
};

export default Sidebar;