import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const GetReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (e) => {
    const review = {
      email: e.target.email.value,
      name: e.target.name.value,
      ratting: e.target.ratting.value,
      about: e.target.textArea.value,
    };
    fetch("https://frozen-badlands-14934.herokuapp.com/review", {
      // fetch('http://localhost:5000/review', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Thank you for getting review .");
        // console.log('Success:', data);
      });
    e.preventDefault();
  };
  return (
    <div className="h-screen bg-zinc-300 px-3 flex justify-center items-center">
      <div
        data-aos="flip-up"
        className="card w-96 bg-base-100 shadow-orange-400 shadow-2xl"
      >
        <div className="card-body">
          <form onSubmit={handleReview}>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              value={user?.email}
              disabled
              className="input my-5 input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              required
              name="ratting"
              placeholder="Ratting here"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              name="textArea"
              required
              className="textarea textarea-bordered w-full max-w-xs mt-5"
              placeholder="Write some text here .. "
            ></textarea>
            <input
              type="submit"
              placeholder="Type here"
              className="input text-white text-xl mt-3 bg-[#002341] input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetReview;
