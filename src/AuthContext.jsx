import React, { createContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const handleLogin = () => {
    setIsAuthenticated(true);
};


const handleLogut = () => {
    setIsAuthenticated(false);
};

return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogut}}>
    {children}
    </AuthContext.Provider>
);
};

export default AuthContext;