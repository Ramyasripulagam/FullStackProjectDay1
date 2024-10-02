import {createContext, useContext, useState} from 'react';
import Welcome from './Welcome';
import { globalContext } from './App';
import LoginPage from './LoginPage';

//export const UserContext=createContext();//create context 
function Home(){
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext);
    return(
        <div>
            {
            globalIsLogin?
            <Welcome/>
            
            :<LoginPage/>
            }
        </div>
    );
}
export default Home;                                           