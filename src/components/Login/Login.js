import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInGoogle, signOutUsingGoogle,user} = useAuth();
    
    return (
        <div className='text-center my-3'>
            {
                user.email&& <button  onClick={signOutUsingGoogle}>sign out</button>
            }
            {
                !user.email&&<button onClick={signInGoogle}>sign in google</button>
            }
           
        </div>
    );
};

export default Login;