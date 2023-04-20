import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './popular.css';
import l1 from "../img/i1.jpg"
import l2 from "../img/i2.jpg"
import l3 from "../img/i3.jpg"
import l4 from "../img/i4.jpg"
import { Box, Container, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
function BestFlight() {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <Box justifyContent={'center'} m={{ base: 0, md: 10 }} pl={{ base: 0, md: 10 }}>
       <Heading>Popular Flights Near You</Heading>
      <Text>Find dashing deals on domestic and international flights!</Text>
      <Slider {...settings}>
        <div className="card1">
          <Flex className="card-top1" gap={0} justifyContent={'center'}>
            <Image src={l1} borderRadius={'30px'} margin={2}/>
            <VStack spacing={2}>
            <HStack spacing={2}>
              <Box>
                 <Image src={l2} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l3}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
              </HStack>
              
              <HStack spacing={2}>
              <Box>
                 <Image src={l4} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l1}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
            </HStack>
            </VStack>
            
            
           
          </Flex> 
        </div>
        <div className="card1">
          <Flex className="card-top1" gap={0} justifyContent={'center'}>
            <Image src={l2} borderRadius={'30px'} margin={2}/>
            <VStack>
            <HStack>
              <Box>
                 <Image src={l4} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l3}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
              </HStack>
              
              <HStack>
              <Box>
                 <Image src={l2} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l1}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
            </HStack>
            </VStack>
            
            
           
          </Flex> 
        </div>
        <div className="card1">
          <Flex className="card-top1" gap={0} justifyContent={'center'}>
            <Image src={l3} borderRadius={'30px'} margin={2}/>
            <VStack>
            <HStack>
              <Box>
                 <Image src={l1} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l3}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
              </HStack>
              
              <HStack>
              <Box>
                 <Image src={l4} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l1}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
            </HStack>
            </VStack>
            
            
           
          </Flex> 
        </div>
        <div className="card1">
          <Flex className="card-top1" gap={0} justifyContent={'center'}>
            <Image src={l4} borderRadius={'30px'} margin={2}/>
            <VStack>
            <HStack>
              <Box>
                 <Image src={l3} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l2}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
              </HStack>
              
              <HStack>
              <Box>
                 <Image src={l1} h={'200px'} borderRadius={'30px'}/>
              </Box>
              <Box>
                 <Image src={l4}  h={'200px'} borderRadius={'30px'}/> 
              </Box>
            </HStack>
            </VStack>
            
            
           
          </Flex> 
        </div>

         
      
    </Slider>
    
    
  </Box>
  );
}

export default BestFlight;
