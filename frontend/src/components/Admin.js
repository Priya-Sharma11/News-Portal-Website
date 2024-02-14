import React, { useEffect, useState } from "react";
import Adminnavbar from "./Adminnavbar";

export default function Admin() {
  const [allusers, setallusers] = useState([]);
  const users = async () => {
    var response = await fetch("http://localhost:4000/fetchallusers", {
      method: "get",

      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    console.log(data);
    setallusers(data);
  };
  useEffect(() => {
    users();
  }, []);
  const del = async (e) => {
    var response = await fetch(
      `http://localhost:4000/deletebyadmin/${e.target.id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    var res = await response.json();
    if (res.success === true) {
      users();
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <Adminnavbar />
      <table className="table" style={{ marginTop: "10%" }} border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {allusers.map((data, index) => {
            var converteddate = new Date(data.date);
            var newdate = converteddate.toLocaleDateString();
            console.log(newdate);
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{newdate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={del}
                    id={data._id}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
