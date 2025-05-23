import React from 'react';
import { BookOpen, School, MapPin, Home, Calendar, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="min-min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative">
                    {/* Top decorative edge - notebook paper */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-blue-100 flex overflow-hidden">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-4 w-4 bg-white rounded-full -mt-2 mx-1"
                            ></div>
                        ))}
                    </div>

                    {/* Content area */}
                    <div className="pt-10 px-6 md:px-12 pb-12">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Left column - Error message and illustration */}
                            <div className="flex-1">
                                <div className="flex items-center mb-6">
                                    <School className="h-10 w-10 text-blue-700" />
                                    <h1 className="ml-3 text-3xl font-bold text-blue-900">Campus Connect</h1>
                                </div>

                                <h2 className="text-6xl md:text-8xl font-bold text-blue-900 mb-6">404</h2>

                                <div className="relative mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                                        Class Not Found!
                                    </h3>
                                    <p className="text-slate-600 max-w-lg leading-relaxed mb-6">
                                        Looks like you've wandered into an empty classroom. The course you're looking for might have been moved, canceled, or never existed in our catalog.
                                    </p>

                                    {/* Pencil underline effect */}
                                    <div className="absolute -bottom-2 left-0 w-full h-2">
                                        <svg width="100%" height="8" viewBox="0 0 400 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.5C67.1667 2.16667 133.333 1 199.5 1C265.667 1 331.833 2.16667 398 5.5" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right column - Navigation shortcuts */}
                            <div className="bg-blue-50 rounded-lg p-6 w-full md:w-auto">
                                <h4 className="flex items-center text-blue-900 font-bold mb-4">
                                    Find Your Way Back
                                </h4>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { label: "Campus Home", link: "/" },
                                        { label: "Colleges", link: "/colleges" },
                                        { label: "Admission", link: "/admission" },
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.link}
                                            className="flex items-center p-3 bg-white rounded-md border border-blue-100 hover:bg-blue-100 hover:border-blue-200 transition-colors group"
                                        >
                                            <div className="text-blue-600 group-hover:text-blue-700">
                                                {item.icon}
                                            </div>
                                            <span className="ml-3 text-slate-700 group-hover:text-slate-900 font-medium">
                                                {item.label}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;