import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            name: "Dana Gilmore",
            collegeName: "Greenfield University",
            review: "The campus environment is peaceful, and the professors are very supportive throughout the semester.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial.webp",
            rating: 4.5
        },
        {
            _id: 2,
            name: "Jessica Fowley",
            collegeName: "Lakeside College",
            review: "Great academic programs and excellent placement opportunities. I’m glad I chose this college.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial-1.webp",
            rating: 4.5
        },
        {
            _id: 3,
            name: "Virginia Wolf",
            collegeName: "Hilltop Institute of Technology",
            review: "Modern labs and a strong focus on research make this college stand out from the rest.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial1-1.webp",
            rating: 4.5
        },
        {
            _id: 4,
            name: "Sara Loreley",
            collegeName: "Riverside International College",
            review: "Vibrant student life, excellent faculty, and plenty of extracurriculars to join. Highly recommended!",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial5-1.webp",
            rating: 4.5
        },
        {
            _id: 5,
            name: "Lisa Simpson",
            collegeName: "Maplewood College",
            review: "The admission process was smooth, and the support team answered all my questions quickly.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial4-1.webp",
            rating: 4.5
        },
        {
            _id: 6,
            name: "Susan Barkley",
            collegeName: "Everest Science and Arts College",
            review: "This college has an amazing library, great research opportunities, and helpful staff.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonials6-1.webp",
            rating: 4.5
        },
    ];



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
                                        <img src={review?.photo} alt="" className='h-[45px] w-[45px] rounded-full' />
                                        <div>
                                            <h5 className='mb-1 font-medium'>{review?.name}</h5>
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