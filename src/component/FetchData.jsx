import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FetchData = ({ cat = "general" }) => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=ffb23159c0354a19ad4bac361a743903`)
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4 min-vh-100">
      <h3 className="text-center mb-4">TOP HEADLINES : {cat}</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data ? (
          data.map((item, index) => (
            <div key={index} className="col">
              <div className="card h-100" style={{ boxShadow: "2px 2px 30px silver", borderRadius: "5px" }}>
                <img
                  src={item.urlToImage}
                  alt="Image not found"
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  <a href={item.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center">LOADING.....</h1>
        )}
      </div>
    </div>
  );
};

export default FetchData;
