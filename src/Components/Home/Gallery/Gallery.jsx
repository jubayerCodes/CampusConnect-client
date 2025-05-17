import React from 'react';
import graduation1 from "../../../assets/img/graduation1.jpg"
import graduation2 from "../../../assets/img/graduation2.jpg"
import graduation3 from "../../../assets/img/graduation3.jpg"
import graduation4 from "../../../assets/img/graduation4.jpg"
import graduation5 from "../../../assets/img/graduation5.jpg"
import graduation6 from "../../../assets/img/graduation6.jpg"
import graduation7 from "../../../assets/img/graduation7.jpg"
import graduation8 from "../../../assets/img/graduation8.jpg"
import graduation9 from "../../../assets/img/graduation9.jpg"
import graduation10 from "../../../assets/img/graduation10.jpg"

const Gallery = () => {
    return (
        <>
            <section className='section bg-[var(--secondary-bg)]'>
                <div className="my-container">
                    <h2 className='text-4xl font-semibold text-center'>Something Unforgettable</h2>



                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12">
                        <div className="grid gap-2">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation1} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation2} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation3} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation4} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation5} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation6} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation7} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation8} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation9} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation10} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation6} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={graduation1} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Gallery;