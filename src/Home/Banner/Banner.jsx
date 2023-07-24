import React from 'react';
import banner from '../../assets/Banner/banner.png'

const Banner = () => {
  return (
    <div className='pt-28 md:pt-32 flex justify-between flex-wrap items-center gap-5'>
      <div className='md:w-1/2 w-full'>
        <h1 className='text-6xl'>Find Your best <span className='text-blue-400'><br /> College</span><br /> From Here</h1>
        <h2 className='mt-5'>Welcome to Our Academic Avenue College Apply Platform Embrace Possibility Choose Your Dream College, and Set Yourself on the Road to Achievement. Streamlined Applications, Expert Guidance and a World of Possibilities Await. Transform Your Aspirations into Reality.</h2>
        <button className='btn text-white btn-info mt-5'>More Details</button>
      </div>
      <div className='md:inline hidden'>
        <img className='w-64' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;