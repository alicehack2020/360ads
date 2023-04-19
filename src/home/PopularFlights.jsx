import { Box, Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import i1 from "../img/i1.jpg"
import i2 from "../img/i2.jpg"
import i3 from "../img/i3.jpg"
import i4 from "../img/i4.jpg"
function PopularFlights() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <Button className="custom-left-arrow" onClick={onClick}>
        &lt;
      </Button>
    );
  };
  
  const CustomRightArrow = ({ onClick }) => {
    return (
      <Button className="custom-right-arrow" onClick={onClick}>
        &gt;
      </Button>
    );
  };
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <Flex className="custom-button-group">
        <CustomLeftArrow onClick={() => previous()} />
        <CustomRightArrow onClick={() => next()} />
      </Flex>
    );
  };

  return (
    <Box mx={100} mt={10}>
      <Heading >Popular Flights Near You</Heading>
      <Text mt={5}>Find dashing deals on domestic and international flights!</Text>
 <Box mx={{base:20,md:100,lg:150}} mt={10}>
      <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customButtonGroup={<CustomButtonGroup />}
    >
      <Card  w={'200px'} mx={3}>
        <Image src={i1}></Image>
      </Card>
      <Card w={'200px'}  mx={3}>
        <Image src={i2}></Image>
      </Card>
      <Card w={'200px'}  mx={3}>
        <Image src={i3}></Image>
      </Card>
      <Card w={'200px'}  mx={3}>
        <Image src={i4}></Image>
      </Card>
    </Carousel>
    </Box>
    </Box>
   
   
  );
}

export default PopularFlights;
