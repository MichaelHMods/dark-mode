import React, { useEffect } from "react";

import useLocalStorage from "./Storage";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode");
    
    
    useEffect(() =>{
        if (useLocalStorage('false') === '') {
            return darkMode
        } else {
            return !darkMode
        }
    }, [darkMode])
    
    
    const handleChange = e => {
        setDarkMode(e.target.value);
    };
    


  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
     
  };
  return [darkMode, toggleMode, handleChange];

};

export default useDarkMode;

