import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { LikeButton } from "@lyket/react";

export default function Newzfeeds() {
  const ref = useRef(null);
  var navigate = useNavigate();
  const [allnewz, setallnewz] = useState([]);
  const [reportednewz, setreportednewz] = useState({});

  const getnewz = async () => {
    var response = await fetch("http://localhost:4000/fetchallnewz", {
      method: "get",

      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    console.log(data);
    setallnewz(data);
  };
  const addreport = async () => {
    let response = await fetch(`http://localhost:4000/reportNewz`, {
      method: "post",
      body: JSON.stringify({
        title: reportednewz.title,
        description: reportednewz.description,
        image: reportednewz.image,
        author: reportednewz.author,
        reportid: reportednewz._id,
      }),
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var data = await response.json();
    if (data.success === true) {
      alert("Reported");
    } else {
      alert("Error");
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      //navigate("/loginpage");
    }
    getnewz();
  }, []);
  const report = async (e) => {
    let response = await fetch(
      `http://localhost:4000/fetchreportednewz/${e.target.id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    var data = await response.json();
    setreportednewz(data);
    ref.current.click();
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Navbar />

      <div
        className="spinner-grow text-secondary "
        role="status"
        style={{ marginTop: "10%", marginLeft: "50%" }}
        id="spinner"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      {allnewz.map((data) => {
        document.getElementById("spinner").style.display = "none";
        var date = new Date(data.date).toLocaleString();

        return (
          <>
            <div
              className="card text-white bg-dark mb-4"
              style={{
                display: "inline-block",
                marginLeft: "2%",
                marginTop: "6%",
                marginRight: "1%",
                marginBottom: "0%",
                width: "30%",
                height: "25%",
              }}
            >
              <h6 className="my-2 mx-4">
                {" "}
                <span class="badge rounded-pill bg-success" id="author">
                  {data.author}
                </span>
              </h6>
              <div className="card mx-4 my-3 " style={{ width: "32rem" }}>
                <img
                  src={data.image}
                  className="card-img-top"
                  alt="..."
                  id="image"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    id="title"
                    style={{ color: "salmon" }}
                  >
                    {data.title}
                  </h5>
                  <div
                    style={{
                      height: "25vh",
                      backgroundColor: "aliceblue",
                      overflow: "auto",
                      width: "50vh",
                    }}
                  >
                    <p className="card-text" id="description">
                      {data.description}
                    </p>
                  </div>
                  <p id="date" style={{ color: "IndianRed", marginTop: "3%" }}>
                    Published on {date}
                  </p>
                  <button
                    className="btn btn-primary mx-2  "
                    onClick={report}
                    id={data._id}
                    style={{ backgroundColor: "mediumslateblue" }}
                  >
                    Report
                  </button>

                  {/*  <button mx-4  onClick={increment} style={{marginRight:"8%",marginLeft:"3%"}}> 👍{count} </button>
                  <button mx-4 onClick={decrement} style={{marginRight:"2%",marginLeft:"3%"}}> 👎{count} </button> */}
                </div>
              </div>
            </div>
            <button
              ref={ref}
              type="button"
              class="btn btn-primary d-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Report newz
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h2>Are you sure you want to report this newz</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={addreport}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
