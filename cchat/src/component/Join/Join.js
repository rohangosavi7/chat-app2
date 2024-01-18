import React, {useState} from 'react'
import "./join.css";
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom'


let user;

const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";
}

const Join = () => {
  const [name, setname] = useState("");

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>Chitchat</h1>
        <input onChange={(e) => setname(e.target.value)} type='text' id='joinInput' placeholder='Enter your name'></input>
        <Link onClick={(event) => !name ? event.preventDefault():null} to='/chat'> <button onClick={sendUser} id='joinbtn'>Log in</button >
        </Link>

      </div>
    </div >
  )
}

export default Join;
export {user};
