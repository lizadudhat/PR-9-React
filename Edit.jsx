import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_USER, Edit_USER } from '../redux/action/crud';
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Component/Header";

function Add() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const dispatch = useDispatch();
    const location=useLocation();
    const navigate=useNavigate();

    useEffect(()=>{
        setTitle(location.state.title);
        setNote(location.state.note)
    },[location.state])

    const handle = (e) => {
        e.preventDefault();
        let obj = {
            id: location.state.id,
            title,
            note
        };

        if (!title || !note) {
            alert("All fields are required...");
            return false;
        }

        dispatch(Edit_USER(obj));

        navigate('/');

        setTitle("");
        setNote("");

    };

    return (

        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 mx-auto border p-4 mb-5 shadow">
                    <form className='position-relative' onSubmit={handle}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-2" 
                                placeholder='Title' 
                                onChange={(e) => setTitle(e.target.value)} 
                                value={title} 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-2" 
                                placeholder='Write a note' 
                                onChange={(e) => setNote(e.target.value)} 
                                value={note} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-warning position-absolute" 
                            style={{ right: '0', borderRadius: '50%', width: '50px', height: '50px' }}>
                            <FaPlusCircle style={{ fontSize: '20px', color: 'white' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Add;
