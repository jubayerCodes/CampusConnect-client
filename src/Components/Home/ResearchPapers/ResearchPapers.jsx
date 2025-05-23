import React from 'react';
import { Link } from 'react-router';

const ResearchPapers = () => {

    const researchPapers = [
        {
            _id: 1,
            title: "AI-Powered Learning Models in Higher Education",
            authors: ["Dr. Amelia Ross", "Jake Turner"],
            year: 2023,
            collegeName: "Greenfield University",
            link: "https://example.com/research/ai-learning-models"
        },
        {
            _id: 2,
            title: "Sustainable Energy Solutions for Campus Facilities",
            authors: ["Prof. Olivia Bennett"],
            year: 2022,
            collegeName: "Lakeside College",
            link: "https://example.com/research/sustainable-energy"
        },
        {
            _id: 3,
            title: "Advancements in Quantum Computing",
            authors: ["Dr. Ethan Cole", "Sarah Khan"],
            year: 2023,
            collegeName: "Hilltop Institute of Technology",
            link: "https://example.com/research/quantum-computing"
        },
        {
            _id: 4,
            title: "The Impact of Social Media on Student Productivity",
            authors: ["Dr. Nora Matthews"],
            year: 2021,
            collegeName: "Riverside International College",
            link: "https://example.com/research/social-media-impact"
        },
        {
            _id: 5,
            title: "Renewable Materials in Architectural Design",
            authors: ["Laura Chen", "Daniel Lee"],
            year: 2023,
            collegeName: "Maplewood College",
            link: "https://example.com/research/green-architecture"
        },
        {
            _id: 6,
            title: "Mental Health and Academic Performance Correlation",
            authors: ["Dr. Samuel Ford"],
            year: 2022,
            collegeName: "Everest Science and Arts College",
            link: "https://example.com/research/mental-health-academics"
        }
    ];

    return (
        <section className='section'>
            <div className="my-container">
                <h2 className='text-4xl font-semibold text-center'>Top Researches</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                    {
                        researchPapers.map(paper => (
                            <div key={paper._id} className="relative bg-white shadow-lg rounded-lg p-4">
                                <div className='mb-4'>
                                    <h3 className="text-xl font-semibold">{paper.title}</h3>
                                    <p className="font-semibold pt-2">{paper.collegeName}</p>
                                </div>
                                <p className="text-gray-600">Authors: {paper.authors.join(", ")}</p>
                                <p className="text-gray-600">Year: {paper.year}</p>

                                <Link to={'#'} target="_blank" rel="noopener noreferrer" className="btn btn-block mt-4">Read More</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ResearchPapers;