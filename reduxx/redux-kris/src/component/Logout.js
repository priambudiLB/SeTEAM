import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import './logout.css'

export default function Logout (){
    const user = useSelector(selectUser)

    const dispatch =useDispatch()
    function handleLogout(e){
        e.preventDefault()
        
        dispatch(logout())
    }
    return(
        <div className="logout">
            <h1>Welcome <span className="user_name">{user.name}</span></h1>
            <button className="logout_btn" onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}
