import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
const productDelete = e =>{
    console.log(e);
    const process = window.confirm('are u sure u want to delete it');
      if(process){
        fetch(`http://localhost:5000/user/${e}`,{
            method: 'DELETE' , 
            headers: { 
               'Authorization': 'Bearer my-token'
           }
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data.deletedCount>0){
                   const filter = user.filter((item)=>item._id!==e);
                   setUser(filter); 
             }
         })
      }
}
    return (
        <div className='py-4 container'>   
        <div className='row g-4'>
        {
            user.slice(0,5).map((item) => <div  className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={item._id}>
                <div className='card-section'>
                    <div className='card card-item'>
                        <div className='card-img'>
                            <img alt='' src='' />
                        </div>
                        <div className='card-body'>
                            <h1>{item.productName} my name</h1>
                            {/* <h1>{item.hour} hour wait </h1> */}
                            <button className='card-btn' onClick={()=>productDelete(item._id)}>
                               delete
                            </button>
                            <Link to={`/update/${item._id}`}>
                            <button className='card-btn' >
                               update
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)
        }
        </div>
    </div>
    );
};

export default AllProduct;