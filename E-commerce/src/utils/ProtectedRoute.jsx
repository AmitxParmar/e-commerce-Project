import React from 'react'

import { isAuthenticated } from '../context/user_context'

import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    if (!isAuthenticated) {
        navigate('/', { replace: true })
    }

    return children

}

export default ProtectedRoute