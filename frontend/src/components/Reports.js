import React, { useEffect, useState } from "react";
import Adminnavbar from "./Adminnavbar";

export default function Reports() {
  const [allreports, setallreports] = useState([]);
  const [searchbar, setsearchbar] = useState("");
  const allreportss = async () => {
    var response = await fetch("http://localhost:4000/fetchallreportednewz", {
      method: "get",

      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    console.log(data);
    setallreports(data);
  };
  useEffect(() => {
    allreportss();
  }, []);
  const del = async (e) => {
    var response = await fetch(
      `http://localhost:4000/deleteadmin/${e.target.id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    var data = await response.json();
    if (data.success === true) {
      alert("post deleted");
    } else {
      alert("post is already deleted");
    }
  };
  const changesearch = (e) => {
    setsearchbar(e.target.value);
  };
  return (
    <>
      <Adminnavbar />
      <div className="justify">
        <div className="mt-5 pt-5 col-lg-8">
          <input
            type="search"
            className="form-control "
            placeholder="search"
            value={searchbar}
            onChange={changesearch}
          />
        </div>
      </div>
      {allreports
        .filter((item) => {
          var searcheditem = searchbar;
          var matcheitem = item.title;

          return searcheditem && matcheitem.includes(searcheditem);
        })
        .map((data) => {
          var date = new Date(data.date).toLocaleString();
          return (
            <>
              <div
                className="row bg-success"
                style={{
                  display: "inline-block",
                  marginTop: "",
                  marginLeft: "2%",
                }}
              >
                <h6 className="my-2 mx-4">
                  {" "}
                  <span class="badge bg-secondary" id="author">
                    {data.author}
                  </span>
                </h6>
                <div className="card mx-4 " style={{ width: "18rem" }}>
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt="..."
                    id="image"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id="title">
                      {data.title}
                    </h5>
                    <div
                      style={{
                        height: "20vh",
                        backgroundColor: "aliceblue",
                        overflow: "scroll",
                        width: "34vh",
                      }}
                    >
                      <p className="card-text" id="description">
                        {data.description}
                      </p>
                    </div>

                    <p id="date">published on {date}</p>
                    <button
                      className="btn btn-danger"
                      id={data.reportid}
                      onClick={del}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <div
        className="spinner-grow text-secondary "
        role="status"
        style={{ marginTop: "10%", marginLeft: "50%" }}
        id="spinner"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      {allreports.map((data) => {
        document.getElementById("spinner").style.display = "none";
        var date = new Date(data.date).toLocaleString();

        return (
          <>
            <div
              className="row"
              style={{
                display: "inline-block",
                marginTop: "8%",
                marginLeft: "2%",
              }}
            >
              <h6 className="my-2 mx-4">
                {" "}
                <span class="badge bg-secondary" id="author">
                  {data.author}
                </span>
              </h6>
              <div className="card mx-4 " style={{ width: "18rem" }}>
                <img
                  src={data.image}
                  className="card-img-top"
                  alt="..."
                  id="image"
                />
                <div className="card-body">
                  <h5 className="card-title" id="title">
                    {data.title}
                  </h5>
                  <div
                    style={{
                      height: "20vh",
                      backgroundColor: "aliceblue",
                      overflow: "scroll",
                      width: "34vh",
                    }}
                  >
                    <p className="card-text" id="description">
                      {data.description}
                    </p>
                  </div>

                  <p id="date">published on {date}</p>
                  <button
                    className="btn btn-danger"
                    id={data.reportid}
                    onClick={del}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
