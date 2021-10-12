import React, { createContext } from 'react';
import useFirebase from '../Firebase/hook';

export const AuthProvider = createContext()
const Context = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthProvider.Provider value={allContext}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;