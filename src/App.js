import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import UpdateData from './components/Dashboard/UpdateData/UpdateData';

import Home from "./components/Home/Home/Home";
import Details from './components/Home/Order/Details';
import ProductReview from './components/Home/ProductReview.js/ProductReview';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Menubar from './components/Share/Menubar';
import { AuthProvider } from './context/AuthProvider';

function App() {
 
  return (
    <div >
     <AuthProvider>
     <BrowserRouter>
      <Menubar></Menubar>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="home" element={<Home/>}/>
            <Route exact path="update/:id" element={<UpdateData/>}/>
            <Route exact path="service" element={<Services/>}/>
            <Route  path="details" element={<PrivateRoute>
              <Details></Details>
             </PrivateRoute>}/>
             
             <Route path="review/:id" element={<ProductReview/>}/>
             <Route path="login" element={<Login></Login>}/>
         </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
