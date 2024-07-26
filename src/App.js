import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabFun2 from "./TabFun2";
import CardListUI from "./CardList";
import { createContext,useState} from "react";
import Profile from "./Profile";
import Home from "./Home";
import Cart from "./Cart";


export const globalContext=createContext();
function App(){
    const [globalCount,setGlobalCount]=useState(0);
    const [globalUserObject,setGlobalUserObject]=useState({});
    const [globalIsLogin,setGlobalIsLogin]=useState(false);

    return(
        <globalContext.Provider value={{globalCount,setGlobalCount,globalUserObject,setGlobalUserObject,globalIsLogin,setGlobalIsLogin}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<CardListUI/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/" element={<TabFun2/>}/>
\
            </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;