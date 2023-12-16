'use client'

import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

type ThemeContextType = {
    toggle: () => void,
    theme: string 
}

export const ThemeContext = createContext<ThemeContextType>({
    toggle: () => {},
    theme: ""
})




export default function ThemeContextProvider({children}: {children:React.ReactNode}) {

    const [theme,setTheme] = useState("dark")

    const toggle = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }


    return (
        <ThemeContext.Provider value={{toggle,theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
