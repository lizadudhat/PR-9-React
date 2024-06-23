import Add from "./Pages/Add";
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./Pages/view";
import Edit from "./Pages/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/view" element={<View/>}/>
                    <Route path="/edit" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>
        
        </div>
    );
}

export default App;
