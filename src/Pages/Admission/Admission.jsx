import React, { useEffect, useState } from 'react';
import AdmissionCard from '../../Components/Admission/AdmissionCard/AdmissionCard';

const Admission = () => {

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/colleges`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <>
            <section className='section'>
                <div className="my-container">
                    <h2 className='text-4xl font-semibold text-center'>Admission</h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                        {
                            colleges.map(college => (
                                <AdmissionCard college={college} key={college?._id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Admission;