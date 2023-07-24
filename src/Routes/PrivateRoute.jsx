import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Home/Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const loading = true;
    const user= true;
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