
import { useLoaderData } from 'react-router';

const CollegeDetails = () => {

    const college = useLoaderData()

    const formateDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <>
            <section className="section">
                <div className="my-container">
                    <div className="college-img w-full">
                        <img className='w-full rounded-2xl' src={college?.collegeImage} alt="" />
                    </div>
                    <div className="college-info mt-10 p-5 shadow-md rounded-2xl">
                        <h2 className='text-4xl font-bold mb-5'>{college?.collegeName}</h2>
                        <hr className='text-[#b9b9b9]' />
                        <div className='mt-5'>
                            <h4 className='text-2xl font-semibold mb-2'>Admission Process:</h4>
                            <ol type='1' className='list-decimal list-inside ms-5'>
                                {college?.admissionProcess?.map((process, idx) => <li key={idx}>{process}</li>)}
                            </ol>
                        </div>
                    </div>
                    <div className="college-info mt-10 p-5 shadow-md rounded-2xl">
                        <div className='mt-5'>
                            <h4 className='text-2xl font-semibold mb-2'>Events:</h4>
                            <div className='flex gap-5'>
                                {college?.events?.map((e, idx) => (
                                    <div key={idx} className='p-4 shadow rounded-2xl'>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xl font-semibold mb-2'>{idx + 1}. {e.name}</h4>
                                            <span>{formateDate(e?.date)}</span>
                                        </div>
                                        <p>{e?.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="college-info mt-10 p-5 shadow-md rounded-2xl">
                        <div className='mt-5'>
                            <div className='flex justify-between items-center'>
                                <h4 className='text-2xl font-semibold mb-2'>Research Works: </h4>
                                <span className='text-lg font-semibold'>{college?.researchHistory?.publications} Research Papers</span>
                            </div>
                            <div className='ms-5 mt-5'>
                                <h4 className='text-lg font-semibold'>Focus Areas:</h4>
                                <ol type='1' className='list-decimal list-inside ms-5'>
                                    {college?.researchHistory?.focusAreas?.map((area, idx) => <li key={idx}>{area}</li>)}
                                </ol>
                            </div>
                            <div className='ms-5 mt-5'>
                                <h4 className='text-lg font-semibold'>Projects:</h4>
                                <ol type='1' className='list-decimal list-inside ms-5'>
                                    {college?.researchHistory?.notableProjects?.map((project, idx) => <li key={idx}>{project}</li>)}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="college-info mt-10 p-5 shadow-md rounded-2xl">
                        <div className='mt-5'>
                            <h4 className='text-2xl font-semibold mb-2'>Sports: </h4>
                            <ol type='1' className='list-decimal list-inside ms-5'>
                                {college?.sports?.map((sport, idx) => <li key={idx}>{sport}</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollegeDetails;