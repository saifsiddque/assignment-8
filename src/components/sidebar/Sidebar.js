import React from 'react';
import './Sidebar.css';
import img from './saif.jpg'

const Sidebar = (props) => {
    // const [break, setbreak] = useState([]);
    //     const handleClick = () =>{
    //         const newcart = cart + todo.time;
    //         setCart(newcart) 
    //         console.log(todo)
    // }
    return (
        <div classNameName='sidebar'>
            <h3><img src={img} alt="" />Saif Siddique</h3> <br />
            <h5>Add A Break</h5>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" checked>
                <label className="btn btn-outline-primary" for="btnradio1" key={1}>{props.key}</label>

                <label className="btn btn-outline-primary" for="btnradio2" key={2}>{props.key}</label>
              
                <label className="btn btn-outline-primary" for="btnradio22" key={3}>{props.key}</label>

                <label className="btn btn-outline-primary" for="btnradio3" key={4}>{props.key}</label>
                
                
            </div> <br /> <br />
            <h5>Exercise Details </h5>
            <p>Exercise Time: <div className="right">{parseInt(props.time)}Minutes</div> </p>
            <p>Break Time: <div className="right">Minutes</div></p>
            <div className='text-center'>
              <button type="button" className="btn btn-primary ">Activity Completed</button>
            </div>
            
        </div>
    );
};

export default Sidebar;