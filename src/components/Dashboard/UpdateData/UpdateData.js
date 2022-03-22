import React, { useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateData = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)              
            }
                )
    }, []);
     const updateProductName = e =>{
         const newUser = {productName:e.target.value,pic:user.pic,price:user.price,desc:user.desc}
         setUser(newUser);
     }
     const updatePic = e =>{
         const newUser = {productName:user.productName,pic:e.target.value,price:user.price,desc:user.desc}
         setUser(newUser);
     }
     const updatePrice = e =>{
         const newUser = {productName:user.productName,pic:user.pic,price:e.target.value,desc:user.desc}
         setUser(newUser);
     }
     const updateProductDetails = e =>{
         const newUser = {productName:user.productName,pic:user.pic,price:user.price,desc:e.target.value}
         setUser(newUser);
       
     }
    const onUpdateData = (e) =>{
        
         fetch(`http://localhost:5000/user/${id}`,{
             method:'PUT',
             headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.modifiedCount>0){
              
                setUser({});
            }
          
         })
        e.preventDefault();
        
    }
    return (
        <div className='text-center'>
            <>
              <h1>{user._id}</h1>
              <h1>{user.productName}</h1>
            </>
           <div className='update-data'>
           <form onSubmit={onUpdateData}>
                 <input value={user.productName || ''} onChange={updateProductName} placeholder='enter product name' />
                 <input value={user.pic || ''} onChange={updatePic}  placeholder='enter product pic url' />
                 <input value={user.price || ''} onChange={updatePrice}   type='number' placeholder='enter product price' />
                 <textarea value={user.desc || ''} onChange={updateProductDetails}  placeholder='enter product details '  />
                 <input type="submit" value="submit" />
               </form>
           </div>
        </div>
    );
};

export default UpdateData;