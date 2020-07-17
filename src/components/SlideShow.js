import React from "react"
import Slider from "infinite-react-carousel"

import { ImageOne } from "./SlideShowImages/ImageOne"
import { ImageTwo } from "./SlideShowImages/ImageTwo"
import { ImageThree } from "./SlideShowImages/ImageThree"
import { ImageFour } from "./SlideShowImages/ImageFour"

export const SlideShow = () => {
  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 7000,
    duration: 300
  }
  return (
    <Slider {...settings}>
      <div>
        <ImageOne />
      </div>
      <div>
        <ImageTwo />
      </div>
      <div>
        <ImageThree />
      </div>
      <div>
        <ImageFour />
      </div>
    </Slider>
  )
}
