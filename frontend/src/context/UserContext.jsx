import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

// const user = localStorage.getItem('user');
const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){
    
    const [ user, setUser] = useLocalStorage('user', null);
    const [ patients, setPatients ] = useLocalStorage('patients', null);
    const [ drugs, setDrugs ] = useLocalStorage('drugs', null);
    const [ prescriptions, setPrescriptions ] = useLocalStorage('prescriptions', null);
    const [ token , setToken]  = useState('');

    const [ notifications, setNotifications ] = useLocalStorage('notifications', []);
    const [ image, setImage ] = useLocalStorage('image', "")



    
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            patients,
            setPatients, 
            drugs, 
            setDrugs,
            prescriptions,
            setPrescriptions,
            notifications,
            setNotifications,
            image,
            setImage
        }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider