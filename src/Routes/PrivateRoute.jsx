import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../Providers/AuthProvider';
import Spinner from '../Home/Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
    const location =  useLocation();
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;