"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingValueContextType {
    loadingValue: number
}

const LoadingValueContext = createContext<LoadingValueContextType | undefined>(undefined);

export const LoadingValueProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [loadingValue, setLoadingValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingValue((prev) => {
                if(prev === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            })
        }, 10)
        return () => clearInterval(interval);
    }, [])

    return (
        <LoadingValueContext.Provider value={{ loadingValue }}>
            {children}
        </LoadingValueContext.Provider>
    )

};

export const useLoadingValue = () => {
    const context = useContext(LoadingValueContext);
    if(!context) {
        throw new Error("useLoadingValue must be used within a LoadingValue Provider")
    }
    return context;
}