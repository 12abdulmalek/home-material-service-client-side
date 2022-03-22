import React, { useEffect, useState } from 'react';

import './service.css'
import pic from '../../images/testimonal.jpg'
import { Link, useParams } from 'react-router-dom';

const Service = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                console.log(data.result)
                setUser(data.result)
            })
    }, [])
    return (
        <div className='py-4 container'>
           
            <div className='row g-4'>
            {
                user.slice(0,5).map((item) => <div  className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={item._id}>
                    <div className='card-section'>
                        <div className='card card-item'>
                            <div className='card-img'>
                                <img alt='' src={pic} />
                            </div>
                            <div className='card-body'>
                                <h1>{item.productName} my name</h1>
                                {/* <h1>{item.hour} hour wait </h1> */}
                                <button className='card-btn'>
                                    <Link to="/details">details</Link>
                                </button>
                                <Link to={`/review/${item._id}`}>product review</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>

    );
};

export default Service;