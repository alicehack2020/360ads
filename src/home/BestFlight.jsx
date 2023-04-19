import { Box, Button, Card, Center, Container, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import i1 from "../img/i1.jpg"
import i2 from "../img/i2.jpg"
import i3 from "../img/i3.jpg"
import i4 from "../img/i4.jpg"
function BestFlight() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
    <Box  mt={10}>
      <Heading >Popular Flights Near You</Heading>
      <Text mt={5}>Find dashing deals on domestic and international flights!</Text>
    
    <Box mt={10}>
              
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
                   
        <Box>
        <HStack px={'200'} spacing={1}>
        <Box p={10} w={'300px'}>
            <Image src={i1} w={'300px'}></Image>
         </Box> 
                      
         <VStack spacing={2} p={5}>
         <Box>
              <Image src={i2} w={'150px'}></Image>                   
            </Box>
            <Box>
              <Image src={i3} w={'150px'}></Image>                   
            </Box>        
            </VStack> 
          
           <VStack spacing={2} p={5}>
             <Box>
              <Image src={i2} w={'150px'}></Image>                   
            </Box>
            <Box>
              <Image src={i3} w={'150px'}></Image>                   
            </Box>     
                
         </VStack>              
     </HStack>         
    </Box> 

                 
</Carousel>
    </Box>
    </Box>
   
   
  );
}

export default BestFlight;
