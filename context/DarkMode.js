"use client"
const {useState, createContext } = require("react");

const DarkModeContext = createContext();


const DarkModeContextProvider = ({children}) =>{
    const[dark,setDark] = useState(false);

    return(
        <DarkModeContext.Provider value={{ dark,setDark }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;