import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const BookAdmission = () => {
    const { register, handleSubmit } = useForm()
    const [college, setCollege] = useState({})

    const params = useParams()

    const _id = params?.id

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/colleges/${_id}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [_id])


    const handleAdmit = async (data) => {
        const imageFile = data.image[0];

        const formData = new FormData();
        formData.append("image", imageFile);

        const imgbbApiKey = import.meta.env.VITE_IMGBB_KEY;


        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                method: "POST",
                body: formData
            });

            const result = await res.json();

            if (result.success) {
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
                console.log(responseData);
            }
        } catch (error) { }
    }
    return (
        <section className="section">
            <div className="my-container">
                <h3 className="font-semibold text-4xl text-center mb-10">Admission - {college?.collegeName}</h3>
                <div className="flex-col max-w-[600px] mx-auto">
                    <form className='w-full' onSubmit={handleSubmit(handleAdmit)}>
                        <input type="text" name='fullName' className="input w-full mb-2" placeholder="Full Name" required {...register("fullName")} />
                        <select name='subject' {...register("register")} className="select w-full mb-2" required>
                            <option value={"science"}>Science</option>
                            <option value={"arts"}>Arts</option>
                            <option value={"business-studies"}>Business Studies</option>
                        </select>
                        <input type="email" name='email' className="input w-full mb-2" placeholder="Email" required {...register("email")} />
                        <input type="text" name='mobile' className="input w-full mb-2" placeholder="Mobile No." required {...register("mobile")} />
                        <input type="text" name='address' className="input w-full mb-2" placeholder="Address" required {...register("address")} />
                        <input type="date" name='DOB' className="input w-full mb-2" placeholder="Date of Birth" required {...register("DOB")} />
                        <input type="file" name='image' className="file-input w-full mb-2" required {...register("image")} />

                        <input type='submit' className="btn w-full" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookAdmission;