import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Signin from '../Pages/Signin';
import PasswordReset from '../Pages/PswReset';
import TokenSend from '../Pages/TokenSend';
import Welcome from '../Pages/Welcome';
import Logout from '../Pages/Logout';

import PrivateRoute from '../PrivateRoute';

function RoutersPath() {
    return (
        <div className='router-page'>
       
        <Routes>
         <Route exact path='/' element={<Welcome/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Signin/>}/>
         <Route path='/reset-token' element={<TokenSend/>}/>
         <Route path='/reset-password' element={<PasswordReset/>}/>
         <Route path='/password-reset-successfull' element={<PasswordReset/>}/>
         <Route path='/logout' element={<Logout/>}/>
         <Route path='*'
         element={
            <PrivateRoute>
              {/* No component needed here, hust redirect to login, if unauthenticated acces */}
            </PrivateRoute>
         }
         />
        </Routes>
       
        </div>
    );
};

export default RoutersPath;