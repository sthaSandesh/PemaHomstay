import React from 'react'

export default function Contact() {
  return (
    <div className="hero min-h-screen bg-gray-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className='font-bold text-gray-700'>
        <h1>Contact</h1>
        <p>contact no: +977-9808441307,+977-9851012725</p>
      </div>
        <div>
          <div className="card w-96 bg-white shadow-xl">

            <div className="card-body">
              <h2 className="card-title font-bold text-gray-700">Get In Touch With Us!</h2>
              <p>Name</p>
              <input type="text" placeholder="Enter your Name" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              <p>Email</p>
              <input type="email" placeholder="Enter Email Addresh" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              <p>subject</p>
              <input type="text" placeholder="Enter Subject" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              <p>Message</p>
              <textarea className="textarea textarea-primary bg-white" placeholder="Message here "></textarea>

              <div className="card-actions justify-end">
                <button className="btn btn-primary  bg-red-600 hover:bg-orange-600 border-red-600 hover:border-orange-600 font-bold">Submit</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        )
}
