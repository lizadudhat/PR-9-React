import React, { useEffect } from 'react';
import { MdEditDocument } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Delete_USER, Edit_USER } from '../redux/action/crud';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);
    const navigate=useNavigate()

   

    return (
        <div>
            <div className="container" style={{width:"50%"}}>
                <div className="row">
                    {record.map((val) => (
                        <div key={val.id} className="col-lg-5 mt-3">
                            <div className="card " style={{ width: '18rem',height:'10rem',boxShadow:"2px 3px  2px  black"}}>
                                <div className="card-body">
                                   
                                    <p className="card-text" style={{ textAlign: 'center',color:"grey", textDecoration:"underline"}}>Note:-{val.note}</p>
                                    <button 
                                        type="button" 
                                        onClick={() => dispatch(Delete_USER(val.id))} 
                                       style={{width:"70px",border:"none",backgroundColor:"white",fontSize:"30px",color:"red"}}
                                       >
                                      <MdOutlineDelete />
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => navigate('/Edit',{state:val})} 
                                        style={{width:"70px",border:"none",margin:"10px",backgroundColor:"white",fontSize:"30px",color:"#f5d03e"}}
                                        >
                                            <MdEditDocument />

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default View;
