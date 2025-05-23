import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import './BookAdmission.css'

const BookAdmission = () => {
    const { register, handleSubmit, reset } = useForm()
    const [college, setCollege] = useState({})
    const [loading, setLoading] = useState(false)

    const params = useParams()

    const _id = params?.id

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/colleges/${_id}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [_id])


    const handleAdmit = async (data) => {
        setLoading(true);
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const imgbbApiKey = import.meta.env.VITE_IMGBB_KEY;

        const admissionPromise = async () => {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                method: "POST",
                body: formData
            });

            const result = await res.json();
            if (!result.success) {
                throw new Error('Image upload failed');
            }

            const imageUrl = result.data.url;

            const admissionData = {
                ...data,
                image: imageUrl,
                collegeId: _id
            };

            const response = await fetch(`${import.meta.env.VITE_API}/admission`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(admissionData)
            });

            const responseData = await response.json();

            if (responseData.existing) {
                throw new Error('Already Admitted');
            }

            if (!responseData.acknowledged) {
                throw new Error('Admission failed. Please try again.');
            }

            return responseData;
        };

        toast.promise(
            admissionPromise()
                .then((data) => {
                    setLoading(false);
                    reset();
                    return data;
                })
                .catch((err) => {
                    setLoading(false);
                    throw err;
                }),
            {
                pending: 'Processing admission...',
                success: 'College booked successfully 🎉',
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
    };

    return (
        <section className="section">
            <div className="my-container">
                <h3 className="font-semibold text-4xl text-center mb-10">Admission - {college?.collegeName}</h3>
                <div className="flex flex-col max-w-[600px] mx-auto">
                    <form className='w-full flex flex-col gap' onSubmit={handleSubmit(handleAdmit)}>
                        <div className="input-field">
                            <label htmlFor="fullName">Full Name</label>
                            <input id='fullName' type="text" name='fullName' className="input w-full mb-2" placeholder="Full Name" required {...register("fullName")} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="subject">Select Subject</label>
                            <select id='subject' name='subject' {...register("register")} className="select w-full mb-2" required>
                                <option value={"science"}>Science</option>
                                <option value={"arts"}>Arts</option>
                                <option value={"business-studies"}>Business Studies</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input id='email' type="email" name='email' className="input w-full mb-2" placeholder="Email" required {...register("email")} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="mobile">Mobile No.</label>
                            <input id='mobile' type="text" name='mobile' className="input w-full mb-2" placeholder="Mobile No." required {...register("mobile")} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="address">Address</label>
                            <input id='address' type="text" name='address' className="input w-full mb-2" placeholder="Address" required {...register("address")} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="DOB">Date of Birth</label>
                            <input id='DOB' type="date" name='DOB' className="input w-full mb-2" placeholder="Date of Birth" required {...register("DOB")} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="image">Choose Image</label>
                            <input id='image' type="file" name='image' className="file-input w-full mb-2" required {...register("image")} />
                        </div>

                        <input type='submit' disabled={loading} className="btn w-full mt-5" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookAdmission;