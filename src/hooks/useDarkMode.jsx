import React from "react";

import useLocalStorage from "./Storage";

const useDarkMode = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage(key, initialValue);
    const handleChanges = updatedValue => {
        setMode(updatedValue);
    };
    return [mode, setMode, handleChanges];
};

