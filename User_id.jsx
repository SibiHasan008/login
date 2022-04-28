import React from "react"
import "./user_id.css"
import { useNavigate } from "react-router-dom";

function Table(){
    const navigate= useNavigate();
    const [logout, setLogout] = React.useState(false);
    React.useEffect(() =>{
        if (!localStorage.getItem("user1")) navigate("/");
    },[logout]);
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("user1");
        setLogout(true);
    }
    return(
        <>
        <header className='header'>
            <h1>NCC Program</h1>
            <button onClick={logoutHandler} id="logoutbtn">
                Logout
            </button>
        </header>
        <div className="div_1">
                <h1 id="user">User Detail</h1>
            <table className="table" border="1mm">
                <thead>
                <tr><th>S_no</th><th>First Name</th><th>Last Name</th><th>Course Registred</th><th>Mail_id</th></tr>
                </thead>
                <tbody>
                <tr><td>1</td><td>Gokul</td><td>Ramesh</td><td>Python</td><td>bostongokul020602@gmail.com</td></tr>
                <tr><td>2</td><td>Hanish</td><td>MD</td><td>Java</td><td>hanishmd04@gmail.com</td></tr>
                <tr><td>3</td><td>Bharath</td><td>Raja</td><td>Full Stack</td><td>bharathr123@gmail.com</td></tr>
                </tbody>
            </table>

        </div>
        </>
    )
}

export default Table