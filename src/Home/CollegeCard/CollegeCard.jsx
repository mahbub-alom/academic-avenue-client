import React, { useEffect, useState } from "react";
import law from "../../assets/college/law-college.jpg";
// import environment from "../../assets/college/environment.jpg";
// import commerce from "../../assets/college/commerce.jpg";

const CollegeCard = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://academic-avenue-server-six.vercel.app/collegeData")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  // {allCategory
  //   .filter((category) => category.categoryName === "Barbie Doll")
  //   .map((item) => (

  return (
    <div className="mt-10 text-black">
      <h2 className="text-6xl text-center">Popular Colleges</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {allData
          .filter((cate) => cate.category === "popular")
          .map((item) => (
            <div key={item._id} className="mt-10 bg-base-100 p-5 shadow-xl">
              <figure>
                <img
                  className="rounded-lg h-96"
                  src={item.college_image}
                  alt="Shoes"
                />
              </figure>
              <div className="mt-5 ps-2">
                <h2 className="text-3xl mb-2">{item.college_name}</h2>
                <p>{item.admission_dates}</p>
                <div className="flex mb-2 justify-evenly">
                  <div className="">
                    <h2 className="text-3xl font-bold mt-5">Events</h2>
                    {item.events.map((event) => (
                      <li>{event}</li>
                    ))}
                  </div>
                  <div className="">
                    <h2 className="text-3xl font-bold mt-5">Sports</h2>
                    {item.sports.map((items) => (
                      <li>{items}</li>
                    ))}
                  </div>
                </div>
                <h2>
                  <span className="font-bold">Research History:</span>
                  {item.research_history}
                </h2>
              </div>
              <div className="flex justify-end">
                <button className="btn text-white btn-info mt-5">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollegeCard;
