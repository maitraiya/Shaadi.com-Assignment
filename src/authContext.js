import {React,createContext} from 'react';

const AuthContext = createContext({
    auth:false,
})

export default AuthContext;