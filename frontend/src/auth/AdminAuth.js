import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminAuth = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));

    if(currentUser !==null){
        return children;
    }else{
        Swal.fire({
            icon : 'error',
            title : 'Error',
            text: 'You have to login first'
        });

        return <Navigate to="/main/login" />
    }
}

export default AdminAuth
