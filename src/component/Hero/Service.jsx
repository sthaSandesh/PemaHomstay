import React from 'react'
import { gardenImg, nighImg, swimImg } from '../../assets/image'

export default function Service() {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row gap-11">
                    <div className=" carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src={gardenImg} className="w-full" alt="immage" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src={swimImg} className="w-full" alt="immage" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src={nighImg} className="w-full" alt="immage" />
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <h1 className="text-5xl font-bold text-red-600">Our</h1>
                            <h1 className="text-5xl font-bold text-orange-600">Services</h1>

                        </div>
                        <p className="py-6 font-bold text-gray-700">Welcome to our hotel! Enjoy a comfortable stay in our well-appointed rooms and suites
                            equipped with modern amenities. Indulge in delicious cuisine at our restaurant or opt for room service. Relax
                            and rejuvenate at our spa and wellness center, or stay active at our fully-equipped fitness center. We strive
                            to provide exceptional services to ensure your stay with us is memorable and enjoyable.</p>
                        <button className="btn btn-primary bg-red-600 border-red-600 hover:bg-orange-600 hover:border-orange-600 font-bold">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
