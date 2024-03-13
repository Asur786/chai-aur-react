//Little bit different approach than earlier for context. Har components me pehle do do import karna pad rha tha use context aur userContext bhi lekin yaha sirf useTheme import krne par kaam ho jayega

import { createContext,useContext } from "react";
//default value like variable and functions bhi de rhe context ko is baar
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}