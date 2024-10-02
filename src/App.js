import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListUI from "./CardList";
import { createContext,useState} from "react";
import Profile from "./Profile";
import Home from "./Home";
import CartProducts from "./CartProducts";
import LoginPage from "./LoginPage";
import StartWelcome from "./StartWelcome"
import RegisterPage from "./RegisterPage";
import Welcome from "./Welcome";
import Profilepage from "./Profilepage";


export const globalContext=createContext();

function App(){
    const [globalCount,setGlobalCount]=useState(0);
    const [globalUserObject,setGlobalUserObject]=useState({});
    const [globalIsLogin,setGlobalIsLogin]=useState(false);
    const [globalIssignup,setGlobalIssignup]=useState(false);


    return(
        <globalContext.Provider value={{globalCount,setGlobalCount,globalUserObject,setGlobalUserObject,globalIsLogin,setGlobalIsLogin,globalIssignup,setGlobalIssignup}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartWelcome/>}/>
                <Route path="/loginpage" element={<LoginPage/>} />
                <Route path="/registerpage" element={<RegisterPage/>}/>
                <Route path="/welcome" element={<Welcome/>}/> 
                <Route path="/products" element={<CardListUI/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profilepage" element={<Profilepage/>}/>
                <Route path="/cartproducts" element={<CartProducts/>}/>

            </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;