import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router';

const CollegeCard = ({ college }) => {

    const [showDetails, setShowDetails] = React.useState(false);

    const formateDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={college?.collegeImage}
                    className="h-52 w-full object-cover"
                    alt={college?.collegeName} />
            </figure>
            <div className="card-body justify-between">
                <h24 className="card-title">{college?.collegeName}</h24>
                <div>
                    <p className="text-sm"><b>Admission Date:</b> {formateDate(college?.admissionDates?.start)} - {formateDate(college?.admissionDates?.end)}</p>
                    <p className="text-sm"><b>Research History:</b> {college?.researchHistory?.publications} Research Papers</p>


                    {
                        showDetails && (
                            <>
                                <p className="text-sm"><b>Events:</b> {college?.events?.map((event, index) => (
                                    <span className="font-semibold" key={index}>{event?.name}{index < college.events.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                                <p className="text-sm pb-2"><b>Sports:</b> {college?.sports?.map((sport, index) => (
                                    <span className="font-semibold" key={index}>{sport}{index < college.sports.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                            </>
                        )
                    }

                    <Rating
                        style={{ maxWidth: 100 }}
                        value={college?.rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start">
                    {
                        !showDetails && (
                            <button className="btn btn-primary" onClick={() => setShowDetails(true)}>Details</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;