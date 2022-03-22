import React, { useEffect, useState } from 'react';

const Services = () => {
    const [user,setUser] = useState([]);
  
    const [page,setPage] = useState(0);
    
    const [pageNumber,setPageNumber] = useState(0);
   let size = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/user?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            let count = data.count;
             count=Math.ceil(count/size);
             console.log(count);
             setPageNumber(count);
             setUser(data.result);
        })
    },[page])
    return (
        <div className='text-center'>
          {
              user.map((item)=><h1>{item.productName}</h1>)
          }

             {
                 [...Array(pageNumber).keys()].map(item=><button className='' onClick={()=>setPage(item)}>{item}</button>)
             }
        </div>
    );
};

export default Services;