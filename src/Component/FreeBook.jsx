import React from "react";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";


function FreeBook() {
  const FilterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(FilterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-3">
       <div className="">
       <h1 className="font-bold text-3xl pb-3 ">Free Offerd Courses</h1>
        <p className="font-bold pb-2 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum
          consectetur odio vero rem. Nostrum cupiditate harum vel nobis sit!
        </p>
        <hr />
        <Slider {...settings}>
       
      {
        FilterData.map((item)=>{
            return(
                <>
              <div className="card" key={item.id}>
                <Card item={item}/>
              </div>
                </>
            )
        })
      }
      </Slider>
       </div>
      </div>
    </>
  );
}

export default FreeBook;
