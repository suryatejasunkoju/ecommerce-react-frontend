import { useState } from "react";
import thaliBannerImg from '../assets/banners/thali_vr_banner.png'


function Banner() {
  return (
    <div className="banner">
      <img src={thaliBannerImg} className="banner" alt="" />
    </div>
  );
}
export default Banner;