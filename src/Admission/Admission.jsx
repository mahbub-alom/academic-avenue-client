import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Zoom } from "react-awesome-reveal";
import { AuthContext } from "../Providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;

const Admission = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this class",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#50C878",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add Class!",
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append("image", data.candidateImage[0]);
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgResponse) => {
            // console.log(imgResponse);
            if (imgResponse.success) {
              const imgURL = imgResponse.data.display_url;
              const classData = {
                classImage: imgURL,
                candidateName: user?.displayName,
                candidateEmail: user?.email,
                subject:user?.subject,
                dataOfBirth:user?.birth,
                phone:user?.phone,
                address:user?.Address
              };
              handleSwalFireWithUpdate(classData);
            }
          })
          .catch((err) => {
            Swal.fire(`Something went wrong!`, `${err.message}`, "error");
          });
      }
    });
  };

  const handleSwalFireWithUpdate = (classData) => {
    fetch("https://academic-avenue-server-six.vercel.app/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire(
            'Subject choice Successfully!',
            "Your choice has been added.",
            "success"
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-28">
      <Zoom>
        <h1 className="text-2xl text-center font-semibold ">
          Admission Colleges
        </h1>
      </Zoom>
      <div className="w-full mx-auto my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-11/12 md:w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">
                Candidate Name:
              </label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">
                Candidate Image:
              </label>
              <input
                type="file"
                {...register("candidateImage", { required: true })}
                className="file-input bg-indigo-100 h-11 file-input-bordered w-full "
              />
            </div>
            <div className="mb-4 w-2/3">
            <label className="text-gray-700 font-semibold">
              Candidate Email:
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">Subject:</label>
              <input
                type="text"
                {...register("subject", { required: true })}
                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">
                Candidate Phone Number
              </label>
              <input
                type="number"
                {...register("phone", { required: true })}
                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">Address</label>
              <input
                type="text"
                {...register("Address", { required: true })}
                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 md:w-2/3">
              <label className="text-gray-700 font-semibold">
                Date of birth
              </label>
              <input
                type="number"
                {...register("birth", { required: true })}
                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 cursor-pointer my-3 w-full font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
