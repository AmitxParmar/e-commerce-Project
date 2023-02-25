import { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/theme_reducers"

const initialState = {
    theme: "",
};

// create theme context which is similar to creating object 
// Reducers and context is kind of Similar to using Redux library.
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    useEffect(() => {
        dispatch({ type: "SET_PREV_THEME" });
    }, []);

    return (
        //  We create the context (Object) for theme, now feed the context (Object) the the updated data.
        // Every time the page loads, the useEffect hook will try send the instruction to the reducer to set the previous theme.
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme,
            }}
        >
            {/* it will work like a wrapper to its children, enables them to use theme data (context) when needed */}
            {children}
        </ThemeContext.Provider>
    );
};

// this function eliminates the the use of useContext method, every time we want to use the Theme Context. It is like a shorthand.

// Ex. useThemeContext (Thats it!).

// Ex. useContext(ThemeContext)  you'll also have to import ThemeContext, and useContext hook every time you want to use the Theme context same goes for every context.

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

