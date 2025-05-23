import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import SocialLogin from '../../Components/Shared/SocialLogin/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';

const Login = () => {

    const { signUpWithEmailAndPassword, loginWithEmailAndPassword, user, loading, updateName, setUpdate, update } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin }, reset: resetLogin, watch: watchLogin } = useForm()

    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false)

    const handleRegister = (data) => {
        const { email, password, fullName, address } = data

        signUpWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user

                updateName(fullName)
                    .then(res => {
                        setUpdate(!update)
                        fetch(`${import.meta.env.VITE_API}/user`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ email, fullName, address })
                        })
                        navigate(from)
                    })
            })

        reset()
    }

    const handleLogin = (data) => {
        const { email, password } = data

        loginWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user
                navigate(from)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

        resetLogin()
    }

    return (
        <section>
            <div className="h-[100vh] section px-5 flex items-center justify-center">
                <div className='login-form bg-white mx-auto min-w-[200px] max-w-[600px] rounded-md py-10 xl:py-16'>
                    <h4 className={`text-2xl text-center ${isRegister ? 'hidden' : ''}`}>Sign into your account</h4>
                    <h4 className={`text-2xl text-center ${isRegister ? '' : 'hidden'}`}>Create an account</h4>
                    <div className='px-5 xl:px-10 mt-10'>
                        <div className={` w-full ${isRegister ? 'hidden' : ''}`}>
                            <form onSubmit={handleSubmitLogin(handleLogin)} className={`flex-col items-stretch justify-between`}>
                                <input {...registerLogin('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="login-email-field" required />
                                <input {...registerLogin('password', { required: true })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="login-password-field" required />
                                <input type="submit" value="Login" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                            </form>
                            <SocialLogin from={from} className={'mt-4'} />
                        </div>
                        <div className={`${isRegister ? '' : 'hidden'}`}>
                            <form onSubmit={handleSubmit(handleRegister)} className={`flex-col items-stretch justify-between `}>

                                <input required {...register('fullName', { required: true })} placeholder='Full Name' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="fullName" id="register-name-field" />
                                <input required {...register('address', { required: true })} placeholder='Address' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="address" id="register-address-field" />
                                <input required {...register('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="register-email-field" />
                                <input required {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="register-password-field" />

                                {errors.password && <span className='form-warning'>{errors.password.message}</span>}

                                <input type="submit" value="Register" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                            </form>
                            <SocialLogin from={from} className={'mt-4'} />
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <button onClick={() => setIsRegister(true)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? 'hidden' : ''}`}>Register here!</button>
                            <button onClick={() => setIsRegister(false)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? '' : 'hidden'}`}>Back to login</button>
                            <button className={`${isRegister ? 'hidden' : ''} cursor-pointer transition hover:text-[var(--btn-bg)]`}>Forgot Password?</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;