import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Colleges = () => {
  const [allData, setAllData] = useState([]);
  console.log(allData);

  useEffect(() => {
    fetch("https://academic-avenue-server-six.vercel.app/collegeData")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="pt-16 grid grid-cols-1 md:grid-cols-2">
      {allData.map((data) => (
        <div key={data._id} className="mt-10 bg-base-100 p-5 shadow-xl">
          <figure>
            <img
              className="rounded-lg h-96"
              src={data.college_image}
              alt="Shoes"
            />
          </figure>
          <div className="mt-5 ps-2">
            <h2 className="text-3xl mb-2">{data.college_name}</h2>
            <p>{data.admission_dates}</p>
            <div className="flex mb-2 justify-evenly">
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Events</h2>
                {data.events.map((event) => (
                  <li>{event}</li>
                ))}
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mt-5">Sports</h2>
                {data.sports.map((sport) => (
                  <li>{sport}</li>
                ))}
              </div>
            </div>
            <h2>
              <span className="font-bold">Research History:</span>
              {data.research_history}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <Rating
              placeholderRating={data.rating}
              className="text-orange-400"
              emptySymbol={<FaRegStar></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <button className="btn text-white btn-info mt-5">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colleges;
