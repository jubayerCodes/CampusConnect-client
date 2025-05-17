import React from 'react';
import { useForm } from 'react-hook-form';

const AdmissionCard = ({ college }) => {

    const { register, handleSubmit } = useForm()

    const formateDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }


    const handleAdmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
                <div className='mb-2'>
                    <h3 className="text-xl font-semibold mb-2">{college?.collegeName}</h3>
                    <p className="text-sm"><b>Admission Date:</b> {formateDate(college?.admissionDates?.start)} - {formateDate(college?.admissionDates?.end)}</p>
                </div>

                <button className="btn btn-block mt-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Admit</button>
            </div>


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Admission - {college?.collegeName}</h3>
                    <div className="modal-action flex-col">
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
                        <form method="dialog" className='w-full'>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AdmissionCard;