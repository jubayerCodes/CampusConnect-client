import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import defaultUserImg from '../../assets/img/default-user.png'

const Profile = () => {

    const { user, update, setUpdate, updateName, logout } = useContext(AuthContext)

    const [storedUser, serStoredUser] = useState({})
    const [fullName, setFullName] = useState('')
    const [university, setUniversity] = useState('')
    const [address, setAddress] = useState('')


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                serStoredUser(data)
                setFullName(data?.fullName)
                setUniversity(data?.university || "")
                setAddress(data?.address)
            })
    }, [user, update])


    const handleEditProfile = async (e) => {
        e.preventDefault()
        const data = { fullName, address, university }

        const response = await fetch(`${import.meta.env.VITE_API}/user/${storedUser?.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        console.log(responseData);

        if (responseData?.modifiedCount) {
            updateName(fullName)
                .then(res => {
                    setUpdate(!update)
                    toast.success('Profile Updated Successfully', {
                        theme: "dark"
                    })
                })
        }

    }

    return (
        <>
            <section className='section h-screen mt-20 xl:mt-0'>
                <div className="my-container flex flex-col md:flex-row gap-10 items-stretch md:items-center">
                    <div className="profile-img">
                        <img src={user?.photoURL || defaultUserImg} alt="" className='w-full mb-5' />
                        <div className='flex justify-between'>
                            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Edit Profile</button>
                            <button className='btn btn-primary' onClick={() => logout()}>Logout</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold mb-2 md:mb-5'>{storedUser?.fullName}</h3>
                        <p><b>Email: </b>{storedUser?.email}</p>
                        <p><b>Address: </b>{storedUser?.address}</p>
                        <p><b>University: </b>{storedUser?.university}</p>
                    </div>
                </div>
            </section>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Update Profile!</h3>
                    <form onSubmit={(e) => (handleEditProfile(e))}>
                        <div className="input-field flex flex-col gap-1 w-full mb-2">
                            <label htmlFor="fullName">Full Name</label>
                            <input className='input w-full' type="text" name="fullName" id="fullName" defaultValue={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full name' />
                        </div>
                        <div className="input-field flex flex-col gap-1 w-full mb-2">
                            <label htmlFor="university">University</label>
                            <input className='input w-full' type="text" name="university" id="university" defaultValue={university} onChange={(e) => setUniversity(e.target.value)} placeholder='University' />
                        </div>
                        <div className="input-field flex flex-col gap-1 w-full mb-2">
                            <label htmlFor="address">Address</label>
                            <input className='input w-full' type="text" name="address" id="address" defaultValue={address} onChange={(e) => setAddress(e.target.value)} placeholder='address' />
                        </div>
                        <input type="submit" value="Save" className='btn w-full btn-primary mt-2' />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default Profile;