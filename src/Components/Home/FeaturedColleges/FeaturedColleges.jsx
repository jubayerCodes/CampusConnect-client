import { useEffect, useState } from "react";
import { Link } from "react-router";


const FeaturedColleges = () => {

    const colleges = [
        {
            "collegeImage": "/college1.jpeg",
            "collegeName": "Harbor Tech University",
            "admissionDates": {
                "start": "2025-06-01",
                "end": "2025-08-15"
            },
            "events": [
                {
                    "name": "TechX Fair",
                    "date": "2025-09-10",
                    "description": "An annual expo showcasing student-led innovations in AI, Robotics, and IoT."
                },
                {
                    "name": "Hackathon",
                    "date": "2025-10-05",
                    "description": "A 48-hour hackathon that attracts developers from across the country."
                }
            ],
            "researchHistory": {
                "focusAreas": [
                    "Renewable Energy",
                    "Quantum Computing",
                    "Neural Interfaces"
                ],
                "notableProjects": [
                    "SolarNet: AI-optimized solar energy grid",
                    "QuantaSim: Simulation framework for quantum processors"
                ],
                "publications": 124
            },
            "sports": [
                "Basketball",
                "Swimming",
                "Esports",
                "Archery"
            ],
            "rating": 4.8
        },
        {
            "collegeImage": "/college2.jpeg",
            "collegeName": "Sierra School of Arts & Humanities",
            "admissionDates": {
                "start": "2025-05-10",
                "end": "2025-07-25"
            },
            "events": [
                {
                    "name": "Valley Voices",
                    "date": "2025-08-20",
                    "description": "A performing arts festival featuring theater, dance, and spoken word."
                },
                {
                    "name": "LitFest",
                    "date": "2025-09-15",
                    "description": "A celebration of literature with workshops and guest authors."
                }
            ],
            "researchHistory": {
                "focusAreas": [
                    "Cultural Preservation",
                    "Creative Writing",
                    "Media Theory"
                ],
                "notableProjects": [
                    "Digital Archive of Native American Folk Tales",
                    "Postmodern Poetry in the Digital Age"
                ],
                "publications": 87
            },
            "sports": [
                "Yoga",
                "Fencing",
                "Soccer",
                "Rock Climbing"
            ],
            "rating": 4.0
        },
        {
            "collegeImage": "/college3.jpg",
            "collegeName": "Nova Institute of Science & Technology",
            "admissionDates": {
                "start": "2025-04-20",
                "end": "2025-07-10"
            },
            "events": [
                {
                    "name": "Nova Symposium",
                    "date": "2025-09-01",
                    "description": "A conference highlighting cutting-edge research by faculty and students."
                },
                {
                    "name": "Science Week",
                    "date": "2025-10-12",
                    "description": "STEM activities, exhibitions, and guest lectures focused on space exploration."
                }
            ],
            "researchHistory": {
                "focusAreas": [
                    "Space Sciences",
                    "Biotechnology",
                    "AI Ethics"
                ],
                "notableProjects": [
                    "Mars Habitat BioDome",
                    "CRISPR-Cure Research for Genetic Diseases"
                ],
                "publications": 205
            },
            "sports": [
                "Table Tennis",
                "Track and Field",
                "Martial Arts",
                "Basketball"
            ],
            "rating": 5.0
        }
    ]

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
                                    <Link to={`/colleges/${college?.id}`} className="btn btn-primary">Details</Link>
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