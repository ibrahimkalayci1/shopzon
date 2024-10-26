import React from 'react'
import Slider from 'react-slick'


const SliderComp = () => {
    
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6' >
            <div className=''>
                <div className='text-6xl font-bold' >en kaliteli ayakkabılar burada</div>
                <div className='text-lg my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, numquam!</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200' >incele</div>
            </div>
            <img src="IMG_20181109_131138.jpg"  width={100}  height={100} alt="" />
          </div>
          
          <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
                <div className='text-6xl font-bold' >en kaliteli ayakkabılar burada</div>
                <div className='text-lg my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, numquam!</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200' >incele</div>
            </div>
             <img src="IMG_20180610_152135.jpg"  width={100} height={100} alt="" />
          </div>
          
          
        </Slider>
      ;
    
    
    </div>
  )
}

export default SliderComp