import React, { useState } from "react";
import config from "../../config";
import { useAuth } from "../../contexts/auth";

import "./addreview.css";

const AddReview = ({ isOpen, setIsOpen, id, token, modifyReviews }) => {
  const { user } = useAuth();

  const [inputs, setInputs] = useState({
    rating: "5",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const { backendURL } = config;

  const handleSubmit = async () => {
    setLoading(true);
    await fetch(`${backendURL}/api/review`, {
      method: "post",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        ...inputs,
        resId: id,
      }),
    }).then((response) => response.json());
    setLoading(false);
    setIsOpen(false);
    modifyReviews({
      ...inputs,
      name: user.name,
    });
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  if (!isOpen) return null;

  return (
    <div className="reviewoverlay">
      <div className="reviewCont">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <span>
              <p className="cancelx" onClick={()=> setIsOpen(false)} >&#10005;</p>
              <select
                className="rate"
                name="rating"
                value={inputs.rating}
                onChange={handleInput}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </span>
            <textarea
              className="review-content"
              rows="6"
              name="content"
              placeholder="write review"
              value={inputs.review}
              onChange={handleInput}
            ></textarea>
            <button onClick={handleSubmit} className="reviewbtn">
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddReview;
