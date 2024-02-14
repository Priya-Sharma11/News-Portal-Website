import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Login() {
  var navigate = useNavigate();
  const [loginuser, setloginuser] = useState({});
  const change = (e) => {
    setloginuser({ ...loginuser, [e.target.id]: e.target.value });
  };
  const Loginuser = () => {
    if (
      loginuser.email === "admin123@gmail.com" &&
      loginuser.password === "Admin123@"
    ) {
      navigate("/admin");
      return <></>;
    }
    var response = fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({
        email: loginuser.email,
        password: loginuser.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        console.log(json);
        if (json.success) {
          localStorage.setItem("token", json.authoken);
          navigate("/Userprofile");
          window.location.reload();
        } else {
          alert("invalid crediantials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid" id="loginboxchild">
          <div className="row">
            <div className="col-sm-6 text-black ">
              <img src="logoNewZ.png" alt="..." height={50} />
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 fs-2">
                <form style={{ width: "23rem", marginLeft: "40%" }}>
                  <div
                    className="form-outline mb-4"
                    style={{ marginTop: "-50%" }}
                  >
                    <label className="form-label fs-4" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      onChange={change}
                    />
                  
                  <div className="form-outline mb-4">
                    <label className="form-label fs-4" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      onChange={change}
                    />
                  </div>
                  </div>
                  <div className="pt-1 mb-4" >
                    <button className="btn btn-info btn-lg" type="button" onClick={Loginuser}
                      style={{ marginTop: "-22%" }}>
                      Login
                    </button>
                  <div
                    style={{ fontSize: "14px",marginLeft:"15px", marginTop: "-7px" }}>
                    Already an account? <Link to="/Registrationform">Sign up</Link>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
