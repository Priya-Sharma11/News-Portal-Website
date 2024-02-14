import React, { useContext, useEffect, useRef, useState } from "react";
import CreateContext from "../context/Createcontext";
import Navbar from "./Navbar";
export default function FilterCategory() {
  const contaxt = useContext(CreateContext);
  const { getallnewz, categorynewz, holdcategory } = contaxt;
  const [filtereddata, setfiltereddata] = useState({});
  const [reportednewz, setreportednewz] = useState({});
  const ref = useRef(null);
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
      alert("reported");
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    getallnewz();
  }, []);
  var arr = [];
  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage:
            'url("https://i.ytimg.com/vi/8dWEcP1zSTM/maxresdefault.jpg")',
          backgroundRepeat: "repeat",
          opacity: "0.9",
        }}
      >
        <Navbar />

        {console.log(holdcategory)}
        {console.log(categorynewz)}
        {categorynewz.map((data) => {
          if (holdcategory === data.category) {
            var date = new Date(data.date).toLocaleString();
            return (
              <>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "2%",
                    marginTop: "6%",
                    marginRight: "1%",
                    marginBottom: "0%",
                    width: "30%",
                    height: "25%",
                    backgroundColor: "lightblue",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      display: "inline-block",
                      marginLeft: "2%",
                      marginTop: "6%",
                    }}
                  >
                    <h6 className="my-2 mx-4 mb-3">
                      {" "}
                      <span class="badge rounded-pill bg-danger" id="author">
                        {data.author}
                      </span>
                    </h6>
                    <div className="card mx-4 mb-4" style={{ width: "22rem" }}>
                      <div style={{ marginTop: "5px" }}>
                        <img
                          src={data.image}
                          className="card-img-top"
                          alt="..."
                          id="image"
                        />
                      </div>
                      <div className="card-body" style={{ marginTop: "2%" }}>
                        <h5
                          className="card-title"
                          id="title"
                          style={{ color: "salmon" }}
                        >
                          {data.title}
                        </h5>
                        <div
                          style={{
                            height: "20vh",
                            backgroundColor: "aliceblue",
                            overflow: "auto",
                            width: "34vh",
                          }}
                        >
                          <p className="card-text" id="description">
                            {data.description}
                          </p>
                        </div>
                        <p
                          id="date"
                          style={{ color: "IndianRed", marginTop: "3%" }}
                        >
                          Published on {date}
                        </p>
                        <button
                          className="btn btn-primary mx-2 "
                          onClick={report}
                          id={data._id}
                          style={{ backgroundColor: "mediumslateblue" }}
                        >
                          report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            return <></>;
          }
        })}
        {}

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
      </div>
    </>
  );
}
