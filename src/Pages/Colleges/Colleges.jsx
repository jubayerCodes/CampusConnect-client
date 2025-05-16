
import React, { useEffect, useState } from 'react';
import CollegeCard from '../../Components/Shared/CollegeCard/CollegeCard';

const Colleges = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('../../../colleges.json')
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }, [])
    return (
        <>
            <section className='section'>
                <div className="my-container">
                    <h2 className='text-4xl font-semibold text-center'>Colleges</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                        {colleges.map((college, idx) => (
                            <CollegeCard key={idx} college={college} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Colleges;