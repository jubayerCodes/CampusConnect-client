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
            <section className='section min-h-screen'>
                <div className="my-container">
                    <h2 className='text-4xl font-semibold text-center'>Admission</h2>


                    <div className="flex flex-col gap-5 mt-12">
                        {
                            colleges.map((college, idx) => (
                                <AdmissionCard college={college} idx={idx} key={college?._id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Admission;