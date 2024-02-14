import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import image from "./Images/news.jpg";

export default function Addanddisplaynews() {
  var navigate = useNavigate();

  const [newzholder, setnewzholder] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
    category: "",
  });
  const [holduser, setholduser] = useState({});
  const change = (e) => {
    setnewzholder({ ...newzholder, [e.target.id]: e.target.value });
  };
  const changeimge = (e) => {
    var img = e.target.files[0];
    var data = new FileReader();
    data.readAsDataURL(img);
    data.onload = () => {
      setnewzholder({ ...newzholder, image: data.result });
    };
  };
  const addnewz = async (e) => {
    var response = await fetch("http://localhost:4000/addnewz", {
      method: "post",
      body: JSON.stringify({
        title: newzholder.title,
        description: newzholder.description,
        image: newzholder.image,
        author: holduser.name,
        category: newzholder.category,
      }),
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var data = await response.json();
    if (data.success === true) {
      alert("newz added successfully");
      navigate("/newzfeeds");
    } else {
      alert("newz not added successfully");
    }
  };
  const singleuser = async () => {
    var response = await fetch("http://localhost:4000/fetchuser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var data = await response.json();
    console.log(data);
    setholduser(data);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/loginpage");
    }
    // eslint-disable-next-line
    singleuser();
    console.log(holduser);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <section
          className="h-100 mb-0 h-custom"
          style={{
            backgroundImage:
              'url("https://i.ytimg.com/vi/q3GOjOCvZBA/maxresdefault.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            opacity: "1.0",
          }}
        >
          <div className=" py-5 h-100 mb-0 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3">
                  <div
                    className="card-body p-4 p-md-5"
                    style={{
                      backgroundImage:
                        'url("https://media.istockphoto.com/id/1311529896/vector/news-room-realistic-studio-for-recording-tv-programs-3d-newscasters-table-and-presentation.jpg?s=612x612&w=0&k=20&c=fTvVgjIQftFEE2FZ7Y1PB_6m5daVtsi1Ve1yYlXVovY=")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "120%",
                      opacity: "0.9",
                    }}
                  >
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Add Newz
                    </h3>
                    <div className="px-md-2">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          placeholder="Title"
                          onChange={change}
                          style={{ backgroundColor: "#8ab4f8" }}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline datepicker">
                            <textarea
                              type="text"
                              className="form-control"
                              id="description"
                              placeholder="Description"
                              onChange={change}
                              rows={4}
                              style={{ backgroundColor: "#ADD8E6" }}
                            />
                          </div>
                          <div className="my-2">
                            <select
                              className="fs-4 "
                              style={{
                                borderRadius: "10px",
                                padding: "5px",
                                backgroundColor: "#ADD8E6",
                              }}
                              onChange={change}
                              id="category"
                            >
                              <option>category</option>
                              <option>sports</option>
                              <option>general</option>
                              <option>science</option>
                              <option>entertainment</option>
                            </select>
                          </div>
                        </div>
                        {/* <div className="col-md-6 mb-4">
                  <input type="text" className="form-control" id="author" placeholder='Author name' onChange={change}/>
               
                  </div> */}
                      </div>

                      <div>
                        <label
                          htmlFor="image"
                          className="btn btn-outline-success my-2 mx-3 fs-4 "
                        >
                          Upload image
                        </label>
                        <input
                          type="file"
                          id="image"
                          className="d-none"
                          onChange={changeimge}
                        />
                        <button
                          type="submit"
                          className="btn btn-success btn-lg mb-1"
                          onClick={addnewz}
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        &lt;
      </div>
    </>
  );
}
