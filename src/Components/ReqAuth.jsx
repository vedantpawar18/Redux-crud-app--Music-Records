import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ReqAuth = ({children}) => {

    const auth= useSelector(store=> store.AuthReducer.isAuth);
    const location = useLocation();

    if (!auth){
        return <Navigate state={{ from: location}} to="/login" replace />
    }
  return (
    children
  )
}

export default ReqAuth