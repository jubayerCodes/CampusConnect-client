import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    useEffect(() => {
        console.log(reviews);
    }, [reviews])


    return (
        <>
            <section className='section bg-[var(--secondary-bg)]'>
                <div className="my-container">
                    <h2 className='text-4xl font-semibold text-center'>Reviews</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                        {
                            reviews.map((review, idx) => (
                                <div key={idx} className='bg-white testimonial-card p-8 shadow rounded-md'>
                                    <div className='flex justify-start items-center gap-3 mb-5'>
                                        <img src={review?.candidateImage} alt="" className='h-[45px] w-[45px] rounded-full' />
                                        <div>
                                            <h5 className='mb-1 font-medium'>{review?.candidateName}</h5>
                                            <p className='text-xs text-[var(--text-color)]'>{review?.collegeName}</p>
                                        </div>
                                    </div>

                                    <p className='text-[var(--text-color)] text-sm mb-3'>{review?.review}</p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;