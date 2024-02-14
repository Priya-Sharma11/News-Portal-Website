import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import image from './Images/news.jpg'
import Newzfeeds from "./Newzfeeds";
export default function Userprofile() {
  const [newzholder, setnewzholder] = useState({title:'',description:'',author:'',image:'',category:''})
  const chanage=(e)=>{
      setnewzholder({...newzholder,[e.target.id]:e.target.value})

  }
  const changeimge=(e)=>{
    var img=e.target.files[0];
    var data=new FileReader()
    data.readAsDataURL(img)
    data.onload=()=>{
        setnewzholder({...newzholder,image:data.result})
    }
}
  const ref = useRef(null);
  const [hold, sethold] = useState([]);
  const [holduser, setholduser] = useState([]);
  const [first, setfirst] = useState({});
  var navigate = useNavigate();
  const getsingledata = async () => {
    var response = await fetch("http://localhost:4000/fetchsingleusernewz", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var data = await response.json();
    console.log(data);
    sethold(data);
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
    singleuser();
    getsingledata();
  }, []);
  const handledelete = async (e) => {
    var response = await fetch(`http://localhost:4000/delete/${e.target.id}`, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var res = await response.json();
    if (res.success === true) {
      getsingledata();
    } else {
      alert("not deleted");
    }
  };
  const update = (e) => {
    ref.current.click();
    setfirst({
      ...first,
      id: e.target.id,
      title: e.target.title,
      description: e.target.name,
      
    });
  };
  const handleupdate = async (e) => {
    var response = await fetch(`http://localhost:4000/update/${first.id}`, {
      method: "put",
      body: JSON.stringify({
        title: first.title,
        description: first.description,
        author: first.author,
        image:newzholder.image
      }),
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });
    var res = await response.json();

    getsingledata();
  };
  const change = (e) => {
    setfirst({ ...first, [e.target.id]: e.target.value });
  };
  var image;
  var name;
  return (
    <>
      <Navbar />
      {
        Object.keys(holduser).map((item)=>{
           image=holduser.image;
           name=holduser.name

          return(<>
            
          </>)
        })
      }
      <div id="profile_pic" style={{marginTop:'6%',marginLeft:'',height:'30vh',backgroundColor:'MistyRose',textAlign:'center',color:"MediumAquaMarine"}}>
              <img alt="..." src={image} style={{height:'100px' ,width:'100px',borderRadius:'50px'} } className="my-3"/>
              <h1 className="my-4">{name}</h1>
            </div>
            
      {hold.map((data) => {
        var date = new Date(data.date).toLocaleString();
        
        return (
          <>
            
            <div
              className="card text-white bg-light  mb-5"
              style={{ display: "inline-block",
              marginLeft: "2%",
              marginTop: "6%",
              marginRight:"1%",
              marginBottom:"0%",
              width:"29%",
              height:"25%"}}
            >
              <div style={{backgroundImage:'url("https://img.freepik.com/premium-photo/text-breaking-news-news-graphic-with-lines-circular-shapes-studio-abstract-background-elegant-luxury-3d-illustration-style-news-template_510351-1801.jpg")', backgroundRepeat:'repeat-y'}}>
              <h6 className="my-2 mx-4 mb-4">
                {" "}
                <span class="badge bg-secondary bg-danger">{data.author}</span>
              </h6>
              <div className="card mx-4 mb-3" style={{ width: "22.5rem"}}>
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body " style={{color:"IndianRed"}}>
                  <h3 className="card-title">{data.title}</h3>
                  <div
                    style={{
                      height: "20vh",
                      backgroundColor: "aliceblue",
                      overflow: "auto",
                      width: "50vh",
                    }}
                  >
                    <p className="card-text" id="description" style={{color:'Black',marginTop:"3%"}}>
                      {data.description}
                    </p>
                  </div>
                  <p style={{color:'Teal',marginTop:"3%"}}>Published on {date}</p>
                  <div>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={handledelete}
                      id={data._id}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={update}
                      id={data._id}
                      title={data.title}
                      name={data.description}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          </>
        );
      })}

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
              <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"seagreen"}}>
                UPDATE
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control my-3"
                id="title"
                onChange={change}
                value={first.title}
              />
              <input
                type="text"
                className="form-control my-3"
                id="description"
                onChange={change}
                value={first.description}
              />
            </div>
            
            <div class="modal-footer">
            <label htmlFor='image' className='btn btn-outline-info my-2 mx-3 fs-4 '>Upload image</label>
            <input type='file' id='image' className='d-none' onChange={changeimge}/>
            <button
                type="button"
                class="btn btn-primary"
                onClick={handleupdate}
              >
                Save Changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
