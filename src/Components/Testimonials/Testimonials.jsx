import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProfilePic1 from "../../img/profile1.jpg";
import ProfilePic2 from "../../img/profile2.jpg";
import ProfilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: ProfilePic1,
      review: `Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Cupiditate, iste! 
      Sed harum ipsam cum incidunt? Lorem ipsum, 
      dolor sit amet consectetur adipisicing elit. 
      Cupiditate, iste! Sed harum ipsam cum incidunt?`
    },
    {
      img: ProfilePic2,
      review: `Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Cupiditate, iste! 
      Sed harum ipsam cum incidunt? Lorem ipsum, 
      dolor sit amet consectetur adipisicing elit. 
      Cupiditate, iste! Sed harum ipsam cum incidunt?`
    },
    {
      img: ProfilePic3,
      review: `Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Cupiditate, iste! 
      Sed harum ipsam cum incidunt? Lorem ipsum, 
      dolor sit amet consectetur adipisicing elit. 
      Cupiditate, iste! Sed harum ipsam cum incidunt?`
    },
    {
      img: ProfilePic4,
      review: `Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Cupiditate, iste! 
      Sed harum ipsam cum incidunt? Lorem ipsum, 
      dolor sit amet consectetur adipisicing elit. 
      Cupiditate, iste! Sed harum ipsam cum incidunt?`
    }
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Expectional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidePreview={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Testimonials;
