import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const navigate=useNavigate();

    const [user,setUser] = useState(true)
    
    const [isSeller,setIsSeller] = useState(false)
    const [showUserLogin,setShowUserLogin] = useState(false)

    const value={navigate,user,setUser,setIsSeller,isSeller,
        showUserLogin , setShowUserLogin
    }

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    return useContext(AppContext)
}