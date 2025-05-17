import { useEffect, useState } from "react";
import { Link } from "react-router";


const FeaturedColleges = () => {

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/colleges`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    const formateDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <section className='section'>
            <div className="my-container">
                <h2 className='text-4xl font-semibold text-center'>Featured Colleges</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                    {colleges.map((college, idx) => (
                        <div key={idx} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={college?.collegeImage}
                                    className="h-52 w-full object-cover"
                                    alt={college?.collegeName} />
                            </figure>
                            <div className="card-body">
                                <h24 className="card-title">{college?.collegeName}</h24>
                                <div>
                                    <p className="text-sm"><b>Admission Date:</b> {formateDate(college?.admissionDates?.start)} - {formateDate(college?.admissionDates?.end)}</p>
                                    <p className="text-sm"><b>Events:</b> {college?.events?.map((event, index) => (
                                        <span className="font-semibold" key={index}>{event?.name}{index < college.events.length - 1 ? ', ' : ''}</span>
                                    ))}</p>
                                    <p className="text-sm"><b>Research History:</b> {college?.researchHistory?.publications} Research Papers</p>
                                    <p className="text-sm"><b>Sports:</b> {college?.sports?.map((sport, index) => (
                                        <span className="font-semibold" key={index}>{sport}{index < college.sports.length - 1 ? ', ' : ''}</span>
                                    ))}</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <Link to={`/colleges/${college?._id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedColleges;