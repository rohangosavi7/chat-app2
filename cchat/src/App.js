import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
const ENDPOINT = 'http://localhost:4500';
// const socket = socketIO(ENDPOINT , { transport: ['websocket']});


function App() {
    return (
        <div className='App'>
                <Routes>
                    <Route exact path="/" Component={Join} />
                    <Route path="/chat" Component={Chat}/>                
                </Routes>

        </div>
    )
}
export default App;
