import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_USER } from '../redux/action/crud';

function Add() {
   
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 1000),
           
            note
        };

        if (  !note) {
            alert("All fields are required...");
            return false;
        }

        dispatch(Add_USER(obj));
       
        setNote("");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 mx-auto border p-4 mb-5 shadow"style={{width:"40%",height:"150px"}}>
                    <form className='position-relative' onSubmit={handle}>
                        
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-2" 
                                placeholder='Write a note....' 
                                onChange={(e) => setNote(e.target.value)} 
                                value={note} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-warning position-absolute" 
                            style={{ left: '0',bottom:"-60px",  width: '60px', height: '50px' }}>
                            <FaPlusCircle style={{ fontSize: '30px',color:"white" }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
