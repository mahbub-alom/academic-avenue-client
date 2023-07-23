import React from "react";
import law from "../../assets/college/law-college.jpg";
import environment from '../../assets/college/environment.jpg'

const CollegeCard = () => {
  return (
    <div className="mt-10 text-black">
      <h2 className="text-6xl text-center">Our Popular College</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="mt-10 bg-base-100 p-5 shadow-xl">
          <figure>
            <img className="rounded-lg h-96" src={law} alt="Shoes" />
          </figure>
          <div className="mt-5 ps-2">
            <h2 className="text-3xl mb-2">Bangalore Law College</h2>
            <p>Admission Date:25-07-2023 to 30-07-2023</p>
            <div className="flex mb-2 justify-evenly">
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Events</h2>
                <li>Moot Court Competition</li>
                <li>Legal Symposium</li>
                <li>Debate Tournament</li>
                <li>Law Clinic Workshops</li>
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Sports</h2>
                <li>Basketball</li>
                <li>football</li>
                <li>Tennis</li>
                <li>Table Tennis</li>
              </div>
            </div>
            <h2><span className="font-bold">Research History:</span> Law School is renowned for  it&apos;s legal research, contributing to landmark issues and promoting sustainability worldwide.</h2>
          </div>
        </div>
        <div className="mt-10 bg-base-100 p-5 shadow-xl">
          <figure>
            <img className="rounded-lg h-96" src={environment} alt="Shoes" />
          </figure>
          <div className="mt-5 ps-2">
            <h2 className="text-3xl mb-2">Environment Science College</h2>
            <p>Admission Date:25-09-2023 to 10-10-2023</p>
            <div className="flex mb-2 justify-evenly">
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Events</h2>
                <li>Environment Summit</li>
                <li>Sustainable Development Conference</li>
                <li>Field Research Expeditions</li>
                <li>Green Campus Initiatives</li>
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Sports</h2>
                <li>Swimming</li>
                <li>Basketball</li>
                <li>Tennis</li>
                <li>Table Tennis</li>
              </div>
            </div>
            <h2><span className="font-bold">Research History:</span> Environment Science College is dedicated to studying environmental issues and promoting sustainability worldwide.</h2>
          </div>
        </div>
        <div className="mt-10 bg-base-100 p-5 shadow-xl">
          <figure>
            <img className="rounded-lg" src={law} alt="Shoes" />
          </figure>
          <div className="mt-5 ps-2">
            <h2 className="text-3xl mb-2">Bangalore Law College</h2>
            <p>Admission Date:25-07-2023 to 30-07-2023</p>
            <div className="flex mb-2 justify-evenly">
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Events</h2>
                <li>Moot Court Competition</li>
                <li>Legal Symposium</li>
                <li>Debate Tournament</li>
                <li>Law Clinic Workshops</li>
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Sports</h2>
                <li>Basketball</li>
                <li>football</li>
                <li>Tennis</li>
                <li>Table Tennis</li>
              </div>
            </div>
            <h2><span className="font-bold">Research History:</span> Law School is renowned for  it&apos;s legal research, contributing to landmark issues and promoting sustainability worldwide.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
