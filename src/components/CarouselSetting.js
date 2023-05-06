export const settingsBanner = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settingsBanner: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settingsBanner: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settingsBanner: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
};
export const settingsProduct = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settingsProduct: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settingsProduct: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settingsABanner: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
};