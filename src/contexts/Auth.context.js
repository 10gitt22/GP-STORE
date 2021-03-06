import React, { useContext, useEffect, useState } from 'react';
import { auth }  from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })    
        return unsubscribe;
    }, [])

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
