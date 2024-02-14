import React from "react";
import Navbar from "./Navbar";
import "./Styles/home.css";
import { useNavigate, Link } from "react-router-dom";
import first from "./Images/first.jpg";
import Firstnews from "./Firstnews";
import Thirdnews from "./Thirdnews";
import Fifthnews from "./Fifthnews";
import Sixthnews from "./Sixthnews";


export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section class="recentNews">
        <div class="container">
          <h2 class="news-title" style={{ marginTop: "5%", color: "hotpink" }}>
            {" "}
            News
          </h2>
          <div class="row">
            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <a href="#">
                    <img
                      alt="News Entry"
                      src="https://c.ndtvimg.com/2023-06/5hh1j3l8_virat-kohli-test-mace-afp_625x300_12_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                    />
                  </a>
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>June</span>
                    <strong>13</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="./Secondnews">
                      WTC Final: The Factors That Led To Team India's Downfall
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <img
                    alt="News Entry"
                    src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/12-05-2023-UN-News-Thailand-11.jpg/image1170x530cropped.jpg"
                  />
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>June</span>
                    <strong>3</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="/Firstnews">
                      Huge increase in transnational crime and synthetic drugs
                      in SE Asia requires cross-border cooperation
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <a href="#">
                    <img
                      alt="News Entry"
                      src="https://www.solodev.com/assets/recent-news/news-entry-3.jpg"
                    />
                  </a>
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>May </span>
                    <strong>25</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="./Thirdnews">
                      Crtical Factors when Choosing a CMS
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <a href="#">
                    <img
                      alt="News Entry"
                      src="https://www.solodev.com/assets/recent-news/news-entry-4.jpg"
                    />
                  </a>
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>May</span>
                    <strong>15</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="./Fourthnews">
                      8 Ways to Leverage Big Data for Businesses in 2023
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <a href="#">
                    <img
                      alt="News Entry"
                      src="https://images.mid-day.com/images/images/2023/jun/kangana-saree_d.jpg"
                    />
                  </a>
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>April</span>
                    <strong>25</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="./Fifthnews">
                      {" "}
                      Kangana Ranaut is excited about trailer launch of 'Tiku
                      weds Sheru'
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div class="ct-blog col-sm-6 col-md-4">
              <div class="inner">
                <div class="fauxcrop">
                  <a href="#">
                    <img
                      alt="News Entry"
                      src="https://etvbharatimages.akamaized.net/etvbharat/prod-images/1200-900-18753274-thumbnail-16x9-eeee.jpg"
                    />
                  </a>
                </div>
                <div class="ct-blog-content">
                  <div class="ct-blog-date">
                    <span>April</span>
                    <strong>16</strong>
                  </div>
                  <h3 class="ct-blog-header">
                    <Link to="./Sixthnews">
                      Rahane, Shardul rise in ICC Test rankings; Ashwin
                      maintains top spot among bowlers
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-news btn-contests">
            <Link to="/newzfeeds">VIEW ALL NEWS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
