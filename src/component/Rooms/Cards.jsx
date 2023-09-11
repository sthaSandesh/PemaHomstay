import React from 'react'
import BedIm from '/src/assets/BedImg.jpg'
export default function Cards() {
  return (
    <div className='bg-white px-20 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 py-20 '>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm} alt="Shoes" width={384} /></figure>
        <div className="card-body ">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm} alt="Shoes" width={384} /></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm} alt="Shoes" width={384} / ></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm}alt="Shoes" width={384} /></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>  
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm}alt="Shoes" width={384} /></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={BedIm} alt="room img " width={384} /></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Book Now</button>
            </div>
        </div>
    </div>
</div>
  )
}
