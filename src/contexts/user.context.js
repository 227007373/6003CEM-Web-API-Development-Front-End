import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ token: '' });

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
