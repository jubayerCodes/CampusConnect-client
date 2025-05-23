import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import { Bounce, toast } from "react-toastify";


const MyCollege = () => {

    const [loading, setLoading] = useState(false)

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('')
    const { user } = useContext(AuthContext)
    const [college, setCollege] = useState({})

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/my-college/${user?.email}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [user])

    useEffect(() => {
        console.log(college);
    }, [college])

    const formateDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }


    const handleReview = async () => {

        setLoading(true)

        const data = {
            collegeId: college?.collegeId,
            email: user?.email,
            collegeName: college?.collegeName,
            candidateName: college?.candidateName,
            candidateImage: college?.candidateImage,
            rating: rating,
            review: review
        }

        const reviewPromise = async () => {
            const response = await fetch(`${import.meta.env.VITE_API}/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();


            if (responseData.existing) {
                throw new Error('Review Already Exist!');
            }

            if (!responseData.acknowledged) {
                throw new Error('Review failed. Please try again.');
            }

            return responseData;
        }

        toast.promise(
            reviewPromise()
                .then((data) => {
                    setLoading(false);
                    setRating(0)
                    setReview('')
                    return data;
                })
                .catch((err) => {
                    setLoading(false);
                    throw err;
                }),
            {
                pending: 'Processing review...',
                success: 'Review posted successfully 🎉',
                error: {
                    render({ data }) {
                        return data.message || 'An unknown error occurred';
                    }
                }
            },
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                transition: Bounce,
            }
        );

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
                    <div className="college-info mt-10 p-5 shadow-md rounded-2xl">
                        <div className='mt-5'>
                            <h4 className='text-2xl font-semibold mb-2'>Review: </h4>
                            <div className="ms-5">
                                <textarea className="textarea my-5 w-full" name="review" id="review" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                                <div className="flex justify-between items-center">
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={rating}
                                        onChange={setRating}
                                        isRequired
                                    />

                                    <button className="btn btn-primary" onClick={() => handleReview()}>Add Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyCollege;