import React from 'react';
import './Header.css'
import img from '../../images/testimonal.jpg'
const Header = () => {
    return (
        <div className='header-sect'>
            <div className='container my-5 py-4'>
               <div className='row g-3 align-items-center'>
               <div className='col-sm-12 col-md-8'>
               <div>
                    <h1>ORDER YOUR HOME MATERIAL</h1>
                    <p>to get your favourite order an i feel proud it</p>
                </div>
                <div>
                <div className='search-bar'>
                    <input placeholder='search ur neccesery material'/>
                    <button onClick=''>submit</button>
                </div>
                </div>
               </div>
               <div  className='col-sm-12 col-md-4'>
                   <img src={img} alt='name'/>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Header;