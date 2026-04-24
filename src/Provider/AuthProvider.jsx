import React from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';

const AuthProvider = ({ children }) => {

    const userInfo = {
        name: "John Doe",
        email: "john.doe@example.com",
        profilePicture: "https://example.com/profile.jpg",
    };
    return (
        <AuthContext value={{ userInfo }}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;