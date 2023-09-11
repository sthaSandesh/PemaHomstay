import { Link } from 'raviger'
import React from 'react'
import Img from '/src/assets/BedImg.jpg'

export default function About() {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Img} className="w-[550px] rounded-lg shadow-2xl" />
                    <div>
                        <div className="text-5xl font-bold flex gap-4">
                            <h1 className='text-red-600 '>About</h1>
                            <h1 className='text-orange-600'>US</h1>
                        </div>
                        <div className='py-4 text-gray-600 font-bold'>
                            <p className='py-4'>Welcome to Pema Homestay!</p>
                            <p >At Pema Homestay, we strive to authentic cultural experiences, warm hospitality, and comfortable accommodations await you.
                                Immerse yourself in the local community, indulge in delicious cuisine, and create lasting memories in the beautiful
                                surroundings of our family-owned establishment. Book your stay today and become a part of our extended family.</p>
                                <p>
                                Nestled amidst the breathtaking beauty of the Himalayas, our homestay offers an incredible view that will leave you speechless. Immerse yourself in the tranquility of the surroundings and enjoy comfortable accommodation at reasonable prices. Experience the magic of Nepal and create cherished memories that will last a lifetime.
                                </p>
                        </div>
                        <div>
                            <Link href='/aboutus'>
                            <button
                                className="btn btn-primary bg-red-600 border-red-600 hover:bg-orange-600 hover:border-orange-600 font-bold "
                            >Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
