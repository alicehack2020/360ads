import { Avatar, Box, Center, Container, HStack, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import user1 from "../img/user1.png"
import user2 from "../img/user2 .png"
import temp from "../img/temple.png"
const WhatDoPeopleFeel = () => {
  return (
      <Box mx={{base:'50',md:'100',lg:'100'}} pt={100}>
         <Heading>What do people feel...</Heading>      
          <SimpleGrid minChildWidth={'300px'} spacing={5}  alignItems={'center'} mt={4}>
              <HStack>
                  <Avatar src={user1} w={'100px'} h={'100px'}></Avatar>
                  <VStack align={'left'} w={'200px'}>
                      <Heading as={'h3'} fontSize={'xl'}>RICHARD</Heading>
                      <Text>Great experience buying tickets from you,I will buy it again for my next trip</Text>   
                  </VStack>
              </HStack>
                  
              <HStack>
                    <Avatar src={user2} w={'100px'} h={'100px'}></Avatar>
                  <VStack align={'left'} w={'200px'}>
                      <Heading as={'h3'} fontSize={'xl'}>THOMAS</Heading>
                      <Text>I find TravelPey quick & easy,the pricing is great.thank you SAM.</Text>      
                  </VStack>
              </HStack>
         
          </SimpleGrid>
          <Center>
              <Image src={temp}></Image>
          </Center>
          
           
          
      </Box>
  )
}

export default WhatDoPeopleFeel