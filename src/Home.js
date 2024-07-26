import {createContext, useContext, useState} from 'react';
import Welcome from './Welcome';
import TabFun2 from './TabFun2';
import { globalContext } from './App';

//export const UserContext=createContext();//create context 
function Home(){
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext);
    return(
        <div>
            {
            globalIsLogin?
            <Welcome/>
            
            :<TabFun2/>
            }
        </div>
    );
}
export default Home;                                           