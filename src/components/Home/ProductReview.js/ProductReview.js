import React, { useEffect, useRef, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './reviewsystem.css';
const ProductReview = () => {
    const { user } = useAuth();
    // unique card show here code 
    const [reviewItem, setReviewItem] = useState({});
    const { id } = useParams();
    // review count and comment added 
    const [selectItem, setSelectItem] = useState(2);
    const commentRef = useRef();
    const count = parseInt(selectItem);
    // get review data 
    const [userReview, setUserReview] = useState([]);

    const selected = [
        { id: 1, name: 'very bad' },
        { id: 2, name: 'bad' },
        { id: 3, name: 'average' },
        { id: 4, name: 'good' },
        { id: 5, name: 'very good' },
    ];
    const onSubmit = (e) => {
        setSelectItem(e.target.value)
    }
    // unique data fatch here 
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter((item) => item._id == id);
                setReviewItem(...filter);
            })
    }, [])
    // post review in data base 
    const addReview = (e) => {
        const comment = commentRef.current.value;
        const name = user.displayName;
        const photo = user.photoURL;
        const revieSystem = { name,photo,comment, count, id }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(revieSystem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const addNewData = revieSystem;
                const newReview = [...userReview,addNewData];
                setUserReview(newReview);

            })
            commentRef.current.value='';
            e.preventDefault();
        
    }

    // get review from data base 
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
            const filter = data.filter((item)=>item.id==id)
                setUserReview(filter);
            })
    }, [])
    return (
        <div>
            
            <div className='d-flex justify-content-center'>
               {
                   user.email&& <div className='review-card'>
                   <textarea type="text" placeholder='WRITTE UR COMMENT' ref={commentRef}></textarea>
                   {
                       selected.map((item, index) => <div>
                           <input
                               value={index}
                               type='checkbox'
                               onChange={(index) => onSubmit(index)}
                               checked={index == selectItem ? 'checked' : ''}
                           />
                           <span>{item.name}</span>
                       </div>)
                   }
                   <Rating
                       className='text-danger'
                       emptySymbol="fa fa-star-o fa-2x"
                       fullSymbol="fa fa-star fa-2x"
                       initialRating={count + 1}
                       readonly
                   />
                   <br />
                   <button onClick={addReview}>add your review</button>
               </div>
               }
               {
                   !user.email&&<div className='text-center'>
                       <h1>add to comment please login first!!!</h1>
                     <h1>  <Link  to="/login">login</Link></h1>
                   </div>
               }
            </div>
            <h1 className='text-center my-3'>{reviewItem.email}</h1>
            <div className='review-system'>
                {
                    userReview.map((item,index)=><div className='reviews' key={index}>
                      
                        <img alt='' src={item.photo}/>
                        <h1>{item.name}</h1>
                       <h1>{index+1}.{item.comment}</h1>
                        <Rating
                        className='text-danger'
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={item.count + 1}
                        readonly
                    />
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductReview;