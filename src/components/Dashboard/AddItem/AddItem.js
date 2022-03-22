import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import './additem.css'
const AddItem = () => {

    const nameRef = useRef();
    const picRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
       const onAddHomeMaterial = (e) =>{
       const productName = nameRef.current.value;
       const pic = picRef.current.value;
       const price = priceRef.current.value;
       const desc= descRef.current.value;
      const productData = {productName,pic,price,desc};
      console.log(productData)
       fetch('http://localhost:5000/user',{
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(productData)
       })
       .then(res=>res.json())
       .then(data=>{
         
       })
       nameRef.current.value = '';
       picRef.current.value = '';
       priceRef.current.value = '';
       descRef.current.value = '';
      e.preventDefault();
    }
  
    return (
        <div>
            <h1 className='text-center my-3 text-success'>add home material</h1>
           <div className='addItem-form'>
            <form onSubmit={onAddHomeMaterial}>
                 <input required placeholder='enter product name' ref={nameRef}/>
                 <input required placeholder='enter product pic url' ref={picRef}/>
                 <input required type='number' placeholder='enter product price' ref={priceRef} />
                 <textarea required className='description' placeholder='enter product details ' ref={descRef} />
                 <input type="submit" value="submit" />
            </form>
           </div>
        </div>
    );
};

export default AddItem;