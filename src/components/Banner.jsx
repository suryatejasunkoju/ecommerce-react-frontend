import { useEffect, useState } from "react";
// import thaliBannerImg from '../assets/banners/thali_vr_banner.png'


function Banner() {
  const [bannerList, setBannerList] = useState();

  const getBanners = async () => {
    try {
      console.log("getBanners::try");
      const result = await fetch(
        'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image',
        {
          method: "GET"
        }
      );

      console.log("Banner::result=", result);
      const response = await result.json();
      console.log("Banner::response.recipes=", response.recipes);
      setBannerList(
        response.recipes.map(rcpie => (
          <li>
            {/* console.log("img=", {rcpie.image}, "name=", {rcpie.name}); */}
            <img src={rcpie.image} className="home-banner" alt={rcpie.name} key={rcpie.id} />
          </li>
        )
        )
      );
      // console.log("Banner::imgList=", bannerList);
      if (result.ok && response != undefined && response != null) {
        // const bannerList =;
      }
    } catch (error) {
      console.error("getBanners::catch", error);
    }
  }
  useEffect(
    () => {
      getBanners();
    },
    []
  )
  return (
    <div>
      {/* <img src={thaliBannerImg} className="banner" alt="" /> */}
      <ul className="home-banner-section">
        {bannerList}
      </ul>
    </div>
  );
}
export default Banner;