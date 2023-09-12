import React from "react";
import "./landingPage.css";
import {
  FacebookFilled,
  TwitterCircleFilled,
  WechatFilled,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp, faHotel ,faCopyright} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div style={{ width: '1400px' }}>
      <div className="head">
        <h2 className="travel">
          TRAVEL <span className="agency">AGENCY</span>{" "}
        </h2>
        <div className="head-2">
          <div>
            <p className="social">Connect with us:</p>
            <FacebookFilled style={{ fontSize: "30px", marginRight: "10px" }} />
            <TwitterCircleFilled
              style={{ fontSize: "30px", marginRight: "10px" }}
            />
          </div>
          <img src={"/images/contact.jpg"} className="contact" />
        </div>
      </div>

      <div style={{ display: "inline-block", height: "600px" }}>
        <img src={"/images/travel.jpg"} className="journey" />
        <h2 className="content-image">See what the BUZZ is all about</h2>
        <h2 className="content-image-2">International Travel Agency</h2>
        <button className="content-image-3">GET THE BEST OFFER</button>
      </div>
      <div className="big-3">
        <button className="icon-1">
          <WechatFilled /> CONSULTING
        </button>
        <button className="icon-2">
          <FontAwesomeIcon icon={faPlaneUp} /> TRAVEL GUIDE
        </button>
        <button className="icon-3">
          <FontAwesomeIcon icon={faHotel} /> HOTEL INFO{" "}
        </button>
      </div>

      <div className="offer">
        <h1 className="head-3">What We Offer</h1>
        <p className="content-offer">
          Providing exceptional travel experiences with a wide range of services
          and destinations.
        </p>
      </div>
      <div className="tour">
        <div style={{ width: "300px", height: "700px" }}>
          <img src={"/images/miami.jpg"} className="miami" />
          <h3 style={{ fontSize: "35px" }}>Miami Beach</h3>
          <p>
            Miami Beach, a stunning coastal paradise known for its pristine
            white sand, turquoise waters, and vibrant atmosphere.
          </p>
        </div>

        <div style={{ width: "300px", height: "700px" }}>
          <img src={"/images/sydney.jpg"} className="miami" />
          <h3 style={{ fontSize: "35px" }}>Sydney</h3>
          <p>
            Sydney, a captivating metropolis nestled along Australia's
            picturesque coastline. Iconic landmarks like the Sydney Opera House
            and Sydney Harbour Bridge adorn the skyline. Explore its diverse
            neighborhoods, vibrant arts scene, and stunning harbor views.
          </p>
        </div>

        <div style={{ width: "300px", height: "700px" }}>
          <img src={"/images/us.jpg"} className="miami" />
          <h3 style={{ fontSize: "35px" }}>United States</h3>
          <p>
            The United States, a vast and diverse country, offers a blend of
            cultures, landscapes, and opportunities. From the bustling streets
            of New York City to the natural wonders of the Grand Canyon and the
            rich history of Washington, D.C., the U.S. invites exploration and
            discovery.
          </p>
        </div>
      </div>
      <button class="copy">
      <FontAwesomeIcon icon={faCopyright} />
        <space>  </space>Copyright 2016-2017. All Rights Reserved | Design by: giakietdesign.com
      </button>
    </div>
  );
};

export default Landing;
