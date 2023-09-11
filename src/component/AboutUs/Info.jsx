import React from 'react'
import { VillageImg } from '../../assets/image'


export default function Info() {
    return (
        <div className='py-10 bg-gray-100'>
            <div className="hero  bg-gray-100">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={VillageImg} className="w-[550px] rounded-lg shadow-4xl" />
                    <div className='text-gray-700 font-bold'>
                        <h1 className="text-3xl py-5">Welcome to our Pema HomeStay !</h1>
                        <p>At Pema Homestay, we strive to authentic cultural experiences, warm hospitality, and comfortable accommodations await you. Immerse yourself in the
                             local community, indulge in delicious cuisine, and create lasting memories in the beautiful surroundings of our family-owned establishment. Book
                              your stay today and become a part of our extended family.</p>
                        <p className="py-6">Nestled amidst the breathtaking beauty of the Himalayas, our homestay offers an incredible view that will leave you speechless.
                            Immerse yourself in the tranquility of the surroundings and enjoy comfortable accommodation at reasonable prices. Experience the magic of Nepal
                            and create cherished memories that will last a lifetime.</p>
                       
                    </div>
                </div>
            </div>
            <div className="hero  bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={VillageImg} className="w-[550px] rounded-lg shadow-4xl" />
                    <div>
                        <div className='py-4 text-gray-600 font-bold'>
                        <p>Discover the essence of Nepal at our homestay in Chauri Deurali. With a backdrop of majestic mountains and lush valleys, our location provides
                            a picturesque setting that will take your breath away. We offer cozy rooms and a warm atmosphere where you can relax and rejuvenate. Experience
                            the serenity of nature while enjoying affordable rates that make your stay even more delightful.</p>
                        <p className='py-4'>
                            Escape to our homestay in Chauri Deurali and indulge in a truly authentic Nepali experience. With its stunning views and 
                            affordable prices, our homestay is the perfect destination for nature lovers and adventure enthusiasts. Immerse yourself in
                             the local culture, savor traditional cuisine, and embark on unforgettable hikes and treks. Leave behind the stresses of 
                             everyday life and immerse yourself in the beauty of Nepal.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
