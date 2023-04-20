import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './popular.css';
import l1 from "../img/i1.jpg"
import l2 from "../img/i2.jpg"
import l3 from "../img/i3.jpg"
import l4 from "../img/i4.jpg"
import next from "../img/next.png"
import prev from "../img/prev.png"
import { Box, Button, Container, Flex, HStack, Heading, Image, Text, VStack, position } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
function BestFlight() {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={prev} alt="nextArrow"  position={'absolute'} top={'30%'} {...props}  width={'300px'}/>
    
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={next} alt="nextArrow"  position={'absolute'} top={'30%'} {...props}  width={'300px'}/>
  );
  
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
     initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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
    <Box justifyContent={'center'} m={{ base: 0, md: 10,lg:100}} pl={{ base: 0, md: 10 }}>
       <Heading>Best Flight Near Me
     </Heading>
      <Text>Start Packing! These Countries are Open for Travel!</Text>
      <Slider {...settings} style={{position:'relative' }}>
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
